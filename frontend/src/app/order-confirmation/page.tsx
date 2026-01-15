"use client"

import { useEffect } from "react"
import { useCartStore } from "@/stores/cart-store"
import { RetroButton } from "@/components/ui/retro/button"
import { SunburstBackground } from "@/components/decorative/sunburst-background"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  const clearCart = useCartStore(state => state.clearCart)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-mint-fresh/20 flex items-center justify-center relative overflow-hidden">
      <SunburstBackground />
      
      <div className="bg-latte-cream p-12 rounded-3xl shadow-2xl border-4 border-espresso-dark max-w-lg w-full text-center relative z-10 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        
        <h1 className="font-display text-4xl text-espresso-dark mb-2">Order Confirmed!</h1>
        <p className="text-coffee-medium mb-8">
          Thank you for being part of our story. We've sent a receipt to your email.
        </p>

        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-espresso-dark/20 mb-8">
          <span className="block text-xs uppercase tracking-widest text-coffee-medium mb-1">Invoice Number</span>
          <span className="font-mono text-xl font-bold text-espresso-dark tracking-widest">INV-MB-2024-8823</span>
        </div>

        <div className="space-y-3">
          <RetroButton asChild className="w-full">
            <Link href="/">Back to Home</Link>
          </RetroButton>
          <RetroButton variant="secondary" className="w-full">
            Download Invoice
          </RetroButton>
        </div>
      </div>
    </div>
  )
}
