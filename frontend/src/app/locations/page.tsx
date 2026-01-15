import { RetroBadge } from "@/components/ui/retro/badge"
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
    <div className="bg-sage-fresh min-h-screen relative pt-[120px] pb-24 overflow-hidden">
      {/* Circle pattern background Verbatim */}
      <div className="absolute inset-0 bg-texture-circles bg-[length:100px_100px] opacity-15 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="section-header text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-display text-5xl text-cream-white mb-4">Find Your Nearest Kopitiam</h2>
          <p className="text-cream-white/90 text-xl max-w-2xl mx-auto">
            Three locations across Singapore, each with its own unique character and the same authentic taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {LOCATIONS.map((loc, i) => (
            <article 
              key={loc.id}
              className="location-card bg-cream-white rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="location-card__header flex justify-between items-center p-6 bg-espresso-dark">
                <h3 className="location-card__title text-xl font-bold text-cream-white m-0">{loc.name}</h3>
                <span className="location-card__badge text-[0.6875rem] font-bold uppercase tracking-widest text-espresso-dark bg-sunrise-amber px-3 py-1 rounded-full">
                  {loc.badge}
                </span>
              </div>

              <div className="location-card__image h-[180px] bg-gradient-to-br from-sage-fresh to-honey-light flex items-center justify-center text-6xl">
                {loc.image}
              </div>

              <div className="location-card__details p-6">
                <p className="location-card__address font-bold text-espresso-dark mb-2 text-lg">{loc.address}</p>
                <p className="location-card__hours text-mocha-medium mb-6 text-sm">{loc.hours}</p>

                <div className="location-card__features flex flex-col gap-2 mb-8">
                  {loc.features.map((feature) => (
                    <span key={feature} className="feature text-sm text-mocha-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-pop" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="location-card__actions flex gap-3 pt-6 border-t-2 border-dashed border-butter-toast bg-vintage-paper -mx-6 -mb-6 p-6">
                  <RetroButton className="location-card__link flex-1 w-full text-sm h-10">
                    Get Directions
                  </RetroButton>
                  <RetroButton variant="secondary" className="location-card__link--secondary flex-1 w-full text-sm h-10 border-espresso-dark text-espresso-dark hover:bg-espresso-dark hover:text-cream-white">
                    Details
                  </RetroButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Map Placeholder Verbatim styling */}
        <div className="locations__map h-[400px] bg-white/20 rounded-[2rem] border-[3px] border-dashed border-white/30 flex flex-col items-center justify-center relative backdrop-blur-sm">
          <h3 className="locations__map-title text-cream-white font-display text-2xl mb-2">Singapore Island Wide</h3>
          <p className="locations__map-text text-cream-white/80 mb-8">Interactive Map Loading...</p>
          
          <div className="locations__map-markers flex gap-12">
            <MapMarker delay="0s" />
            <MapMarker delay="0.3s" />
            <MapMarker delay="0.6s" />
          </div>
        </div>
      </div>
    </div>
  )
}
