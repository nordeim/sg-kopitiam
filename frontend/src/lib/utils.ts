import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind classes safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats price in Singapore Dollars
 * @example formatPrice(350, { inCents: true }) // "S$ 3.50"
 */
export function formatPrice(
  amount: number, 
  options: { inCents?: boolean } = {}
) {
  const { inCents = false } = options
  const value = inCents ? amount / 100 : amount
  
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    currencyDisplay: "narrowSymbol",
  }).format(value).replace("$", "S$ ")
}

/**
 * Calculates GST breakdown (9% inclusive)
 * Returns values rounded to 2 decimals for display
 */
export function calculateGST(total: number) {
  const GST_RATE = 0.09
  // If Total = Subtotal * (1 + 0.09)
  // Then Subtotal = Total / 1.09
  const subtotal = total / (1 + GST_RATE)
  const gst = total - subtotal
  
  return {
    subtotal: Number(subtotal.toFixed(2)),
    gst: Number(gst.toFixed(2)),
    total: total
  }
}
