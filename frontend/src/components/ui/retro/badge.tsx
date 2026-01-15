import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wide font-display",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sunrise-coral text-white hover:bg-sunrise-coral/80",
        secondary:
          "border-transparent bg-golden-hour text-espresso-dark hover:bg-golden-hour/80",
        outline:
          "text-espresso-dark border-2 border-dashed border-sunrise-coral bg-transparent",
        ghost: "border-transparent bg-latte-cream-warm text-coffee-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function RetroBadge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { RetroBadge, badgeVariants }
