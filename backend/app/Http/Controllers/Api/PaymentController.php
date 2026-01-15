<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\PaymentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    protected $paymentService;

    public function __construct(PaymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    /**
     * Initialize payment for an order.
     */
    public function createIntent(Request $request)
    {
        $request->validate(['order_id' => 'required|uuid']);
        
        $order = Order::findOrFail($request->order_id);
        
        if ($order->status !== 'pending') {
            return response()->json(['message' => 'Order already processed'], 400);
        }

        $intent = $this->paymentService->createPaymentIntent($order);

        return response()->json($intent);
    }

    /**
     * Handle Stripe Webhook.
     */
    public function webhook(Request $request)
    {
        $payload = $request->all();
        $event = null;

        try {
            // In production, verify signature
            $event = \Stripe\Event::constructFrom($payload);
        } catch(\UnexpectedValueException $e) {
            return response()->json(['error' => 'Invalid payload'], 400);
        }

        if ($event->type == 'payment_intent.succeeded') {
            $paymentIntent = $event->data->object;
            $this->paymentService->markAsPaid($paymentIntent->id);
            Log::info("Payment confirmed for Intent: " . $paymentIntent->id);
        }

        return response()->json(['status' => 'success']);
    }
}
