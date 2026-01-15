"use client"

import { useCartStore } from "@/stores/cart-store"
import { formatPrice } from "@/lib/utils"

export function OrderSummary() {
  const { items, getFinancials } = useCartStore()
  const { subtotal, gst, total } = getFinancials()

  return (
    <div className="bg-latte-cream p-6 rounded-2xl border-4 border-espresso-dark sticky top-24">
      <h3 className="font-display text-xl text-espresso-dark mb-6 border-b-2 border-dashed border-espresso-dark/20 pb-4">
        Order Summary
      </h3>

      <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-start text-sm">
            <div>
              <span className="font-bold text-espresso-dark block">{item.name}</span>
              <span className="text-coffee-medium text-xs">Qty: {item.quantity}</span>
            </div>
            <span className="font-bold text-espresso-dark">{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 text-sm border-t-2 border-dashed border-espresso-dark/20 pt-4">
        <div className="flex justify-between text-coffee-medium">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-coffee-medium">
          <span>GST (9%)</span>
          <span>{formatPrice(gst)}</span>
        </div>
        <div className="flex justify-between font-display font-bold text-xl text-espresso-dark pt-2">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  )
}
