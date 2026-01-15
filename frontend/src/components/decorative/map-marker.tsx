"use client"

export function MapMarker({ delay = "0s" }: { delay?: string }) {
  return (
    <div 
      className="w-6 h-6 bg-sunrise-coral rounded-full shadow-[0_0_0_8px_rgba(255,107,74,0.3),0_0_0_16px_rgba(255,107,74,0.1)] animate-marker-pulse flex items-center justify-center text-white"
      style={{ animationDelay: delay }}
    >
      <div className="w-2 h-2 bg-white rounded-full" />
    </div>
  )
}