import { apiClient, CreateOrderPayload, OrderResponse } from "./api-client";

export const checkoutService = {
  /**
   * Submit an order to the backend.
   * Handles validation errors and returns the invoice number.
   */
  async submitOrder(payload: CreateOrderPayload): Promise<OrderResponse> {
    try {
      const response = await apiClient.createOrder(payload);
      return response;
    } catch (error: unknown) {
      console.error("Checkout Error:", error);
      const message = error instanceof Error ? error.message : "Failed to place order. Please try again.";
      throw new Error(message);
    }
  },

  /**
   * Initialize PayNow payment intent.
   */
  async createPaymentIntent(orderId: string): Promise<{ client_secret: string }> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order_id: orderId }),
    });

    if (!res.ok) {
      throw new Error("Failed to initialize payment");
    }

    return res.json();
  }
};
