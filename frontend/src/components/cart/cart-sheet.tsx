"use client"

import { useCartStore } from "@/stores/cart-store"
import { RetroSheet, RetroSheetContent, RetroSheetHeader, RetroSheetTitle, RetroSheetTrigger } from "@/components/ui/retro/sheet"
import { RetroButton } from "@/components/ui/retro/button"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { ReactNode } from "react"
import Link from "next/link"

export function CartSheet({ children }: { children: ReactNode }) {
  const { items, removeItem, updateQuantity, getFinancials } = useCartStore()
  const { subtotal, gst, total } = getFinancials()
  const hasItems = items.length > 0

  return (
    <RetroSheet>
      <RetroSheetTrigger asChild>
        {children}
      </RetroSheetTrigger>
      <RetroSheetContent>
        <RetroSheetHeader>
          <RetroSheetTitle>Your Order</RetroSheetTitle>
        </RetroSheetHeader>

        {!hasItems ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-espresso-dark/10 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-espresso-dark/40" />
            </div>
            <div>
              <h3 className="font-display text-xl text-espresso-dark">Your table is empty</h3>
              <p className="text-coffee-medium text-sm mt-1">Time to add some kopi & toast!</p>
            </div>
            <RetroSheetClose asChild>
              <RetroButton variant="secondary" className="mt-4">
                Browse Menu
              </RetroButton>
            </RetroSheetClose>
          </div>
        ) : (
          <>
            {/* Scrollable Items List */}
            <div className="flex-1 overflow-y-auto -mx-6 px-6 py-2 space-y-6 h-[calc(100vh-280px)]">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Quantity Controls */}
                  <div className="flex flex-col items-center gap-1 bg-white/50 rounded-full p-1 h-fit border border-espresso-dark/10">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-sunrise-coral hover:text-white transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <span className="font-display font-bold text-sm min-w-[1.5rem] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.quantity - 1) : removeItem(item.id)}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-espresso-dark hover:text-white transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-display font-bold text-espresso-dark leading-tight">{item.name}</h4>
                      <span className="font-bold text-sunrise-coral text-sm">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                    <p className="text-xs text-coffee-medium mb-2">{formatPrice(item.price)} each</p>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-500 flex items-center gap-1 hover:underline"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-latte-cream p-6 border-t-2 border-dashed border-espresso-dark/20 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-coffee-medium">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-coffee-medium">
                  <span>GST (9%)</span>
                  <span>{formatPrice(gst)}</span>
                </div>
                <div className="flex justify-between font-display font-bold text-xl text-espresso-dark border-t border-espresso-dark/10 pt-2">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <RetroButton className="w-full">
                Checkout Now
              </RetroButton>
            </div>
          </>
        )}
      </RetroSheetContent>
    </RetroSheet>
  )
}
