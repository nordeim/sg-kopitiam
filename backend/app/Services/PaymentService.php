<?php

namespace App\Services;

use App\Models\Order;
use Illuminate\Support\Facades\Log;
use Stripe\StripeClient;

class PaymentService
{
    protected $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(config('services.stripe.secret'));
    }

    /**
     * Create a Payment Intent for the order via PayNow.
     */
    public function createPaymentIntent(Order $order): array
    {
        // Amount in cents (smallest currency unit for SGD)
        $amountCents = (int) round($order->total_amount * 100);

        try {
            $intent = $this->stripe->paymentIntents->create([
                'amount' => $amountCents,
                'currency' => 'sgd',
                'payment_method_types' => ['paynow', 'card'],
                'metadata' => [
                    'order_id' => $order->id,
                    'invoice_number' => $order->invoice_number,
                ],
            ]);

            return [
                'client_secret' => $intent->client_secret,
                'id' => $intent->id,
            ];
        } catch (\Exception $e) {
            Log::error("Stripe Error: " . $e->getMessage());
            throw new \RuntimeException("Payment initialization failed.");
        }
    }

    /**
     * Confirm payment logic (called via Webhook usually).
     */
    public function markAsPaid(string $paymentIntentId): void
    {
        $intent = $this->stripe->paymentIntents->retrieve($paymentIntentId);
        
        if ($intent->status === 'succeeded') {
            $order = Order::where('id', $intent->metadata->order_id)->first();
            if ($order) {
                $order->update(['status' => 'confirmed']);
                // Trigger Invoice Generation Job here
            }
        }
    }
}
