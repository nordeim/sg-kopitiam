"use client"

import { useState } from "react"
import { RetroButton } from "@/components/ui/retro/button"
import { cn } from "@/lib/utils"

const LOCATIONS = [
  { id: "tiong-bahru", name: "Tiong Bahru Flagship", address: "55 Tiong Bahru Road" },
  { id: "joo-chiat", name: "Joo Chiat Heritage", address: "212 Joo Chiat Road" },
]

export function PickupScheduler({ 
  onNext,
  onBack
}: { 
  onNext: (data: { locationId: string, time: string }) => void,
  onBack: () => void
}) {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]?.id || "")
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedLocation && time) {
      onNext({ locationId: selectedLocation, time })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-500">
      <div className="space-y-4">
        <h2 className="font-display text-2xl text-espresso-dark">Where & When?</h2>

        <div className="grid grid-cols-1 gap-4">
          {LOCATIONS.map((loc) => (
            <div 
              key={loc.id}
              onClick={() => setSelectedLocation(loc.id)}
              className={cn(
                "p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                selectedLocation === loc.id 
                  ? "border-sunrise-coral bg-sunrise-coral/5" 
                  : "border-espresso-dark/10 bg-white hover:border-espresso-dark/30"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-espresso-dark">{loc.name}</span>
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  selectedLocation === loc.id ? "border-sunrise-coral" : "border-espresso-dark/30"
                )}>
                  {selectedLocation === loc.id && <div className="w-2.5 h-2.5 rounded-full bg-sunrise-coral" />}
                </div>
              </div>
              <p className="text-sm text-coffee-medium mt-1">{loc.address}</p>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-bold text-espresso-dark mb-1">Pickup Time</label>
          <input 
            type="datetime-local"
            required
            className="w-full px-4 py-3 bg-white border-2 border-espresso-dark/20 rounded-lg focus:border-sunrise-coral focus:outline-none"
            onChange={(e) => setTime(e.target.value)}
            min={new Date().toISOString().slice(0, 16)}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <RetroButton type="button" variant="ghost" onClick={onBack} className="flex-1">
          Back
        </RetroButton>
        <RetroButton type="submit" className="flex-1">
          Review Order
        </RetroButton>
      </div>
    </form>
  )
}
