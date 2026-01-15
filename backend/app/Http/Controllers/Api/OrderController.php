<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Services\InventoryService;
use App\Services\PdpaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    protected $inventoryService;
    protected $pdpaService;

    public function __construct(InventoryService $inventoryService, PdpaService $pdpaService)
    {
        $this->inventoryService = $inventoryService;
        $this->pdpaService = $pdpaService;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'email' => 'required|email', // Used for PDPA/Receipt
            'pdpa_consent' => 'required|boolean', // Must accept logic
        ]);

        return DB::transaction(function () use ($validated, $request) {
            $totalAmount = 0;
            $orderItemsPayload = [];

            // 1. Calculate Totals & Reserve Stock
            foreach ($validated['items'] as $item) {
                $product = Product::findOrFail($item['id']);
                
                // Reserve Stock (Throws exception if fails)
                $this->inventoryService->reserveStock($product->id, $item['quantity']);

                $lineTotal = $product->price * $item['quantity'];
                $totalAmount += $lineTotal;

                $orderItemsPayload[] = [
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'price_at_time' => $product->price,
                ];
            }

            // 2. Calculate Financials
            $financials = Order::calculateBreakdown($totalAmount);

            // 3. Log PDPA Consent
            $consent = null;
            if ($validated['pdpa_consent']) {
                $consent = $this->pdpaService->logConsent(
                    $validated['email'], 
                    'order_processing', 
                    'I agree to process my order data.', 
                    $request
                );
            }

            // 4. Create Order
            $order = Order::create([
                'invoice_number' => 'INV-' . strtoupper(Str::random(10)),
                'status' => 'pending',
                'subtotal' => $financials['subtotal'],
                'gst_amount' => $financials['gst_amount'],
                'total_amount' => $financials['total_amount'],
                'pdpa_consent_id' => $consent ? $consent->id : null,
            ]);

            // 5. Create Items
            foreach ($orderItemsPayload as $payload) {
                $order->items()->create($payload);
            }

            return response()->json([
                'invoice_number' => $order->invoice_number,
                'total' => $order->total_amount,
                'status' => 'success'
            ], 201);
        });
    }
}
