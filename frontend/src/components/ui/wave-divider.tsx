import { cn } from "@/lib/utils"

interface WaveDividerProps {
  className?: string
  flip?: boolean
  color?: string
}

export function WaveDivider({ 
  className, 
  flip = false,
  color = "rgb(var(--color-latte-cream))"
}: WaveDividerProps) {
  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-none",
        flip ? "top-0 rotate-180" : "bottom-0",
        className
      )}
      style={{ height: "80px" }}
    >
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[120px]"
        aria-hidden="true"
      >
        <path 
          d="M0,64 C480,150 960,0 1440,64 L1440,120 L0,120 Z" 
          fill={color}
        />
      </svg>
    </div>
  )
}
