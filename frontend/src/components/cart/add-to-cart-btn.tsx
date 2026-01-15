"use client"

import { useCartStore } from "@/stores/cart-store"
import { RetroButton } from "@/components/ui/retro/button"
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { formatPrice } from "@/lib/utils"

interface AddToCartBtnProps {
  id: string
  name: string
  price: number
  category: string
  className?: string
}

export function AddToCartBtn({ id, name, price, category, className }: AddToCartBtnProps) {
  const addItem = useCartStore(state => state.addItem)

  const handleAdd = () => {
    addItem({ id, name, price, category })
    toast.success(
      <div className="flex flex-col gap-1">
        <span className="font-display font-bold text-espresso-dark">Added to Order</span>
        <span className="text-xs text-coffee-medium">{name} - {formatPrice(price)}</span>
      </div>
    )
  }

  return (
    <RetroButton 
      onClick={handleAdd}
      className={className}
    >
      Add to Cart 
      <span className="bg-golden-hour text-espresso-dark w-5 h-5 rounded-full flex items-center justify-center text-xs ml-2">
        <Plus className="w-3 h-3" />
      </span>
    </RetroButton>
  )
}
