"use client"

import { useState } from "react"
import { RetroButton } from "@/components/ui/retro/button"
import { RetroBadge } from "@/components/ui/retro/badge"
import { BeanBounce } from "@/components/decorative/bean-bounce"
import { WaveDivider } from "@/components/ui/wave-divider"
import { cn } from "@/lib/utils"
import Link from "next/link"

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Kopi" },
  { id: "tea", label: "Teh" },
  { id: "food", label: "Food" },
]

const PRODUCTS = [
  {
    id: "kopi",
    name: "Traditional Kopi",
    price: "3.50",
    description: "Strong coffee brewed with margarine and sugar, served with evaporated milk — the authentic Singaporean way.",
    category: "coffee",
    tag: "House Specialty",
    spice: 2, // 2 out of 3
    image: "☕",
    bg: "bg-honey-light"
  },
  {
    id: "kopi-c",
    name: "Kopi-C",
    price: "3.20",
    description: "Coffee with evaporated milk and sugar. Creamy, sweet, and perfectly balanced for your morning ritual.",
    category: "coffee",
    tag: "Best Seller",
    spice: 1,
    image: "☕",
    bg: "bg-honey-light"
  },
  {
    id: "kopi-o",
    name: "Kopi-O",
    price: "3.00",
    description: "Strong black coffee with sugar. Bold, intense, and unapologetically Singaporean.",
    category: "coffee",
    tag: "Authentic",
    spice: 3,
    image: "☕",
    bg: "bg-honey-light"
  },
  {
    id: "teh-tarik",
    name: "Teh Tarik",
    price: "3.20",
    description: "Pulled tea with condensed milk. Smooth, creamy, and served with that signature frothy top.",
    category: "tea",
    tag: "Malaysian Heritage",
    spice: 0,
    image: "🍵",
    bg: "bg-sage-fresh"
  },
  {
    id: "kaya-toast",
    name: "Kaya Toast Set",
    price: "5.50",
    description: "Crispy toast with house-made coconut jam and butter. Served with soft-boiled eggs and your choice of kopi.",
    category: "food",
    tag: "Breakfast Classic",
    spice: 0,
    image: "🍞",
    bg: "bg-golden-hour-light"
  },
  {
    id: "roti-prata",
    name: "Roti Prata",
    price: "5.00",
    description: "Flaky, crispy flatbread served with curry dipping sauce. The perfect pairing with any hot beverage.",
    category: "food",
    tag: "Indian Influence",
    spice: 2,
    image: "🥐",
    bg: "bg-sunrise-coral"
  }
]

export default function MenuPage() {
  const [filter, setFilter] = useState("all")

  const filteredProducts = filter === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter)

  return (
    <div className="bg-sunrise-coral min-h-screen relative pt-[120px] pb-24 overflow-hidden">
      {/* Arc Pattern Background */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCA2MCBRMzAgMzAgNjAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZmZjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-display text-5xl text-latte-cream mb-4">Our Signature Brews</h1>
          <p className="text-latte-cream/90 text-xl">Crafted with beans roasted in-house since 1973</p>
          
          <div className="flex items-center justify-center gap-4 mt-6 text-golden-hour">
            <span className="w-16 h-1 bg-current rounded-full" />
            <CoffeeIcon className="w-8 h-8 fill-current" />
            <span className="w-16 h-1 bg-current rounded-full" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2",
                filter === cat.id
                  ? "bg-golden-hour text-espresso-dark border-golden-hour shadow-lg scale-105"
                  : "bg-white/10 text-latte-cream border-transparent hover:bg-white/20"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <article 
              key={product.id}
              className="group bg-latte-cream rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl relative animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[repeating-linear-gradient(90deg,rgb(var(--color-sunrise-coral))_0,rgb(var(--color-sunrise-coral))_10px,transparent_10px,transparent_20px)]" />

              {/* Image Area */}
              <div className={cn("h-[200px] flex items-center justify-center relative overflow-hidden", product.bg)}>
                <BeanBounce />
              </div>

              {/* Content */}
              <div className="p-6 text-espresso-dark">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl m-0">{product.name}</h3>
                  <span className="font-display font-bold text-xl text-sunrise-coral bg-golden-hour/20 px-3 py-1 rounded-full">
                    ${product.price}
                  </span>
                </div>

                <p className="text-sm text-coffee-medium mb-4 leading-relaxed min-h-[60px]">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-6">
                  <RetroBadge>{product.tag}</RetroBadge>
                  <div className="flex text-sunrise-coral text-xs gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className={i < product.spice ? "opacity-100" : "opacity-30"}>★</span>
                    ))}
                  </div>
                </div>

                <RetroButton className="w-full gap-2 group-hover:bg-sunrise-coral group-hover:text-white">
                  Add to Cart <span className="bg-golden-hour text-espresso-dark w-5 h-5 rounded-full flex items-center justify-center text-xs">+</span>
                </RetroButton>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-12">
          <Link 
            href="/checkout" 
            className="inline-flex items-center gap-2 font-display font-bold text-xl text-latte-cream border-2 border-latte-cream px-6 py-3 rounded-full hover:bg-latte-cream hover:text-sunrise-coral transition-colors"
          >
            Checkout Now →
          </Link>
        </div>
      </div>

      <WaveDivider color="rgb(var(--color-golden-hour))" />
    </div>
  )
}

function CoffeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <path d="M16 2C9.4 2 4 7.4 4 14c0 5.2 3.4 9.6 8 11.2V26h8v-0.8c4.6-1.6 8-6 8-11.2 0-6.6-5.4-12-12-12zm0 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/>
    </svg>
  )
}
