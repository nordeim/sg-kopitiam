import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:translate-y-1 font-display tracking-wide",
  {
    variants: {
      variant: {
        primary:
          "bg-sunrise-coral text-white shadow-button hover:-translate-y-1 hover:shadow-lg border-2 border-sunrise-coral",
        secondary:
          "bg-transparent border-2 border-espresso-dark text-espresso-dark shadow-button hover:-translate-y-1 hover:bg-espresso-dark hover:text-white",
        ghost:
          "hover:bg-latte-cream-warm text-espresso-dark hover:text-sunrise-coral",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const RetroButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
RetroButton.displayName = "RetroButton"

export { RetroButton, buttonVariants }
