import { PolaroidGallery } from "@/components/decorative/polaroid-gallery"
import { WaveDivider } from "@/components/ui/wave-divider"
import { RetroButton } from "@/components/ui/retro/button"
import Link from "next/link"

export default function HeritagePage() {
  return (
    <div className="bg-sunrise-amber min-h-screen relative pt-[120px] pb-24 overflow-hidden">
      {/* Wood grain texture overlay Verbatim */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(61, 43, 31, 0.5) 2px,
            rgba(61, 43, 31, 0.5) 4px
          )`
        }}
      />

      <div className="container relative z-10">
        <div className="section-header text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-display text-5xl text-espresso-dark mb-2">Our Kopitiam Heritage</h2>
          <p className="text-mocha-medium text-xl">Preserving Singapore&apos;s coffee culture since 1973</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="text-espresso-dark space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <p className="heritage__intro text-xl leading-relaxed">
              <span className="heritage__dropcap float-left font-display text-[5rem] font-extrabold leading-[0.8] mr-4 mt-2 text-terracotta-warm">I</span>
              n 1973, Uncle Lim opened his first kopitiam stall at Tiong Bahru Market. With nothing but a trusty coffee sock, a worn marble table, and recipes passed down through generations, he began serving what would become Singapore&apos;s most beloved morning ritual.
            </p>

            {/* Quote Block - Vintage Frame Verbatim */}
            <div className="heritage__quote bg-white/30 rounded-2xl p-8 relative border-[3px] border-dashed border-terracotta-warm my-12">
              <span className="absolute -top-5 left-5 font-display text-[6rem] text-terracotta-warm opacity-50 leading-none">&quot;</span>
              <blockquote className="font-display text-xl italic leading-relaxed mb-4 relative z-10">
                The kopitiam is more than just a place to drink coffee. It&apos;s where lawyers and laborers sit side by side, where deals are made and friendships are forged over steaming cups of kopi.
              </blockquote>
              <footer className="font-bold text-terracotta-warm">— Uncle Lim, Founder</footer>
            </div>

            <p className="leading-relaxed opacity-90">
              Today, Morning Brew Collective honors that legacy. Our coffee beans are still roasted in small batches using Uncle Lim&apos;s original 1970s roaster. Our kaya is made fresh daily. Every cup tells a story of Singapore&apos;s multicultural soul.
            </p>

            {/* Values Grid */}
            <div className="heritage__values grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: "☕", title: "Authentic Recipes", desc: "Uncle Lim's handwritten notes" },
                { icon: "🤝", title: "Community First", desc: "Three generations served" },
                { icon: "🌱", title: "Sustainable", desc: "Direct ASEAN partnerships" },
              ].map((val) => (
                <div key={val.title} className="value text-center bg-white/20 p-4 rounded-xl">
                  <div className="value__icon text-4xl mb-2">{val.icon}</div>
                  <h4 className="value__title font-bold text-sm mb-1">{val.title}</h4>
                  <p className="value__text text-xs text-mocha-medium leading-tight">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Side */}
          <div className="flex flex-col items-center">
            <PolaroidGallery />
            
            <div className="heritage__cta mt-12 bg-espresso-dark text-cream-white rounded-[2rem] p-10 text-center max-w-md shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <h3 className="font-display text-2xl mb-3 text-cream-white">Join Our Morning Tradition</h3>
              <p className="opacity-90 mb-6 text-sm">Experience the authentic kopitiam culture. Every visit includes a complimentary taste of our signature kaya.</p>
              <RetroButton asChild variant="secondary" className="border-cream-white text-cream-white hover:bg-cream-white hover:text-espresso-dark">
                <Link href="/locations">Visit Us Today</Link>
              </RetroButton>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider color="var(--sage-fresh)" />
    </div>
  )
}
