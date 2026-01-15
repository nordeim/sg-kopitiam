"use client"

import { useFilterStore } from "@/stores/filter-store"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Kopi" },
  { id: "tea", label: "Teh" },
  { id: "food", label: "Food" },
]

export function FilterBar() {
  const { activeCategory, setCategory } = useFilterStore()

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={cn(
            "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2",
            activeCategory === cat.id
              ? "bg-golden-hour text-espresso-dark border-golden-hour shadow-lg scale-105"
              : "bg-white/10 text-latte-cream border-transparent hover:bg-white/20"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
