"use client"

import { useState } from "react"
import { useCartStore } from "@/stores/cart-store"
import { OrderSummary } from "@/components/checkout/order-summary"
import { CustomerDetails } from "@/components/checkout/steps/customer-details"
import { PickupScheduler } from "@/components/checkout/steps/pickup-scheduler"
import { SunburstBackground } from "@/components/decorative/sunburst-background"
import { Header } from "@/components/layout/header"

type Step = "details" | "pickup" | "review"

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>("details")
  const [checkoutData, setCheckoutData] = useState<any>({})
  const items = useCartStore(state => state.items)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-latte-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-espresso-dark mb-4">Your cart is empty</h1>
          <a href="/menu" className="underline text-sunrise-coral">Return to Menu</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-latte-cream-warm relative overflow-hidden">
      <Header />
      <SunburstBackground />
      
      <div className="container relative z-10 pt-[120px] pb-24">
        <h1 className="font-display text-4xl text-espresso-dark mb-8 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Wizard Area */}
          <div className="lg:col-span-7">
            {/* Progress Bar */}
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-espresso-dark/10 -z-10" />
              {["details", "pickup", "review"].map((s, i) => (
                <div key={s} className="flex flex-col items-center gap-2 bg-latte-cream-warm px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                    step === s ? "bg-sunrise-coral text-white border-sunrise-coral" : 
                    i < ["details", "pickup", "review"].indexOf(step) ? "bg-espresso-dark text-white border-espresso-dark" : "bg-white text-espresso-dark border-espresso-dark/30"
                  }`}>
                    {i + 1}
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-espresso-dark">{s}</span>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="bg-latte-cream p-8 rounded-2xl shadow-lg border-2 border-espresso-dark/5">
              {step === "details" && (
                <CustomerDetails 
                  onNext={(data) => {
                    setCheckoutData({ ...checkoutData, ...data })
                    setStep("pickup")
                  }} 
                />
              )}
              
              {step === "pickup" && (
                <PickupScheduler 
                  onNext={(data) => {
                    setCheckoutData({ ...checkoutData, ...data })
                    setStep("review")
                  }}
                  onBack={() => setStep("details")}
                />
              )}

              {step === "review" && (
                <div className="text-center py-12">
                  <h3 className="font-display text-2xl text-espresso-dark mb-4">Ready to Pay?</h3>
                  <p className="mb-8 text-coffee-medium">You will be redirected to our secure payment gateway.</p>
                  <button 
                    onClick={() => window.location.href = "/order-confirmation"}
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                  >
                    Pay with PayNow
                  </button>
                  <button 
                    onClick={() => setStep("pickup")}
                    className="block mx-auto mt-4 text-sm text-espresso-dark/50 hover:underline"
                  >
                    Back to Pickup
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Summary */}
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
