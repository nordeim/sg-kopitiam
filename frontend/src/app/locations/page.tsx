import { WaveDivider } from "@/components/ui/wave-divider"
import { MapMarker } from "@/components/decorative/map-marker"
import { RetroButton } from "@/components/ui/retro/button"

const LOCATIONS = [
  {
    id: "tiong-bahru",
    name: "Tiong Bahru",
    badge: "Flagship",
    address: "55 Tiong Bahru Road, #01-55",
    hours: "Daily: 7:00 AM - 8:00 PM",
    features: ["Full Breakfast Menu", "Wheelchair Accessible", "Parking Available"],
    image: "☕",
    color: "bg-sage-fresh" // Note: This will need to be defined in Tailwind if not already, or use hex
  },
  {
    id: "joo-chiat",
    name: "Joo Chiat",
    badge: "Heritage",
    address: "212 Joo Chiat Road",
    hours: "Tue-Sun: 8:00 AM - 9:00 PM",
    features: ["Peranakan Special", "Outdoor Seating", "Pet Friendly"],
    image: "🍵",
  },
  {
    id: "chinatown",
    name: "Chinatown",
    badge: "Modern",
    address: "18 Mosque Street",
    hours: "Daily: 7:30 AM - 10:00 PM",
    features: ["Late Night Supper", "Air Conditioned", "Wifi Available"],
    image: "🥢",
  }
]

export default function LocationsPage() {
  return (
    <div className="bg-mint-fresh min-h-screen relative pt-[120px] pb-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U4QTg1NyIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-15 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-display text-5xl text-latte-cream mb-4">Find Your Nearest Kopitiam</h1>
          <p className="text-latte-cream/90 text-xl max-w-2xl mx-auto">
            Three locations across Singapore, each with its own unique character and the same authentic taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {LOCATIONS.map((loc, i) => (
            <article 
              key={loc.id}
              className="bg-latte-cream rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex justify-between items-center p-6 bg-espresso-dark">
                <h3 className="text-xl font-bold text-latte-cream m-0">{loc.name}</h3>
                <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-espresso-dark bg-golden-hour px-3 py-1 rounded-full">
                  {loc.badge}
                </span>
              </div>

              <div className="h-[180px] bg-gradient-to-br from-mint-fresh to-golden-hour-light flex items-center justify-center text-6xl">
                {loc.image}
              </div>

              <div className="p-6">
                <p className="font-bold text-espresso-dark mb-2 text-lg">{loc.address}</p>
                <p className="text-coffee-medium mb-6 text-sm">{loc.hours}</p>

                <div className="flex flex-col gap-2 mb-8">
                  {loc.features.map((feature) => (
                    <span key={feature} className="text-sm text-coffee-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sunrise-coral" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-6 border-t-2 border-dashed border-golden-hour-light bg-paper-aged -mx-6 -mb-6 p-6">
                  <RetroButton className="flex-1 w-full text-sm h-10">
                    Get Directions
                  </RetroButton>
                  <RetroButton variant="secondary" className="flex-1 w-full text-sm h-10">
                    Details
                  </RetroButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="h-[400px] bg-white/20 rounded-2xl border-4 border-dashed border-white/30 flex flex-col items-center justify-center relative backdrop-blur-sm">
          <h3 className="text-latte-cream font-display text-2xl mb-2">Singapore Island Wide</h3>
          <p className="text-latte-cream/80 mb-8">Interactive Map Loading...</p>
          
          <div className="flex gap-12">
            <MapMarker delay="0s" />
            <MapMarker delay="0.3s" />
            <MapMarker delay="0.6s" />
          </div>
        </div>
      </div>
      <WaveDivider color="rgb(var(--color-golden-hour))" />
    </div>
  )
}