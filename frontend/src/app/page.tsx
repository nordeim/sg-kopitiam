import { SunburstBackground } from "@/components/decorative/sunburst-background"
import { FloatingCoffeeCup } from "@/components/decorative/floating-coffee-cup"
import { BeanBounce } from "@/components/decorative/bean-bounce"
import { MapMarker } from "@/components/decorative/map-marker"
import { WaveDivider } from "@/components/ui/wave-divider"
import { RetroButton } from "@/components/ui/retro/button"
import { RetroBadge } from "@/components/ui/retro/badge"
import { Coffee } from "lucide-react"
import Link from "next/link"

// Featured products for landing page preview
const FEATURED_PRODUCTS = [
  {
    id: "kopi",
    name: "Traditional Kopi",
    price: "3.50",
    description: "Strong coffee brewed with margarine and sugar, served with evaporated milk — the authentic Singaporean way.",
    tag: "House Specialty",
    spice: 2,
  },
  {
    id: "kopi-c",
    name: "Kopi-C",
    price: "3.20",
    description: "Coffee with evaporated milk and sugar. Creamy, sweet, and perfectly balanced for your morning ritual.",
    tag: "Best Seller",
    spice: 1,
  },
  {
    id: "kopi-o",
    name: "Kopi-O",
    price: "3.00",
    description: "Strong black coffee with sugar. Bold, intense, and unapologetically Singaporean.",
    tag: "Authentic",
    spice: 3,
  },
  {
    id: "teh-tarik",
    name: "Teh Tarik",
    price: "3.20",
    description: "Pulled tea with condensed milk. Smooth, creamy, and served with that signature frothy top.",
    tag: "Malaysian Heritage",
    spice: 0,
  },
  {
    id: "kaya-toast",
    name: "Kaya Toast Set",
    price: "5.50",
    description: "Crispy toast with house-made coconut jam and butter. Served with soft-boiled eggs and your choice of kopi.",
    tag: "Breakfast Classic",
    spice: 0,
  },
  {
    id: "roti-prata",
    name: "Roti Prata",
    price: "5.00",
    description: "Flaky, crispy flatbread served with curry dipping sauce. The perfect pairing with any hot beverage.",
    tag: "Indian Influence",
    spice: 2,
  }
]

// Locations data for preview
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
    badge: "Peranakan",
    address: "212 Joo Chiat Road",
    hours: "Tue-Sun: 8:00 AM - 9:00 PM",
    features: ["Peranakan Special", "Outdoor Seating", "Pet Friendly"],
    image: "🏠",
  },
  {
    id: "jurong-lake",
    name: "Jurong Lake",
    badge: "Modern",
    address: "18 Jurong Gateway Road",
    hours: "Daily: 7:30 AM - 10:00 PM",
    features: ["Late Night Supper", "Air Conditioned", "Wifi Available"],
    image: "🌳",
  }
]

export default function HomePage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════════
           HERO SECTION
         ═══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-gradient-sunrise">
        <SunburstBackground />

        {/* Decorative circles from mockup */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-texture-circles bg-[length:100px_100px] opacity-40 rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-[700px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Vintage Badge */}
            <div className="inline-flex items-center gap-3 bg-espresso-dark text-cream-white px-5 py-3 rounded-full font-display font-semibold text-sm mb-6 shadow-md border-2 border-dashed border-sunrise-amber hover:scale-105 transition-transform duration-300">
              <Coffee className="w-6 h-6" />
              <span>Est. 1973 • Singapore Heritage</span>
            </div>

            <h1 className="font-display font-bold text-espresso-dark leading-[1.2] mb-6 text-[clamp(2.5rem,6vw,4.5rem)]">
              Where Singapore&apos;s
              <span className="block text-terracotta-warm italic">Morning Ritual</span>
              Begins
            </h1>

            <p className="text-xl text-mocha-medium mb-8 max-w-[550px] leading-relaxed">
              Experience the perfect blend of tradition and modernity in every cup.
              Crafted with love since 1973, our kopi tells the story of Singapore&apos;s kopitiam heritage.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <RetroButton asChild size="lg">
                <Link href="/menu">Explore Menu</Link>
              </RetroButton>
              <RetroButton asChild variant="secondary" size="lg">
                <Link href="/menu">Order Online</Link>
              </RetroButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t-2 border-dashed border-cinnamon-glow">
              {[
                { number: "50+", label: "Years of Craft" },
                { number: "1000+", label: "Daily Brews" },
                { number: "3", label: "Locations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <span className="block font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-terracotta-warm leading-none">
                    {stat.number}
                  </span>
                  <span className="text-sm font-bold text-mocha-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FloatingCoffeeCup />

        <WaveDivider
          color="var(--terracotta-warm)"
          className="text-terracotta-warm"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           MENU SECTION - Featured Products
         ═══════════════════════════════════════════════════════════════ */}
      <section id="menu" className="bg-terracotta-warm py-24 relative overflow-hidden">
        {/* Arc Pattern Background */}
        <div className="absolute inset-0 opacity-30 bg-texture-arcs bg-[length:60px_60px]" />

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-5xl text-cream-white mb-4">Our Signature Brews</h2>
            <p className="text-cream-white/90 text-xl max-w-lg mx-auto">Crafted with beans roasted in-house since 1973</p>

            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="w-16 h-1 bg-sunrise-amber rounded-full" />
              <Coffee className="w-8 h-8 text-sunrise-amber" />
              <span className="w-16 h-1 bg-sunrise-amber rounded-full" />
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <article
                key={product.id}
                className="group bg-cream-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl relative animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Ticket Jagged Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[repeating-linear-gradient(90deg,var(--sunrise-amber)_0,var(--sunrise-amber)_10px,transparent_10px,transparent_20px)]" />

                {/* Image Area */}
                <div className="h-[200px] flex items-center justify-center relative overflow-hidden bg-honey-light">
                  <BeanBounce />
                </div>

                {/* Content */}
                <div className="p-6 text-espresso-dark">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl m-0">{product.name}</h3>
                    <span className="font-display font-bold text-xl text-terracotta-warm bg-honey-light px-3 py-1 rounded-full">
                      ${product.price}
                    </span>
                  </div>

                  <p className="text-sm text-mocha-medium mb-4 leading-relaxed min-h-[60px]">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mb-6">
                    <RetroBadge>{product.tag}</RetroBadge>
                    <div className="flex text-terracotta-warm text-xs gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <span key={i} className={i < product.spice ? "opacity-100" : "opacity-30"}>★</span>
                      ))}
                    </div>
                  </div>

                  <RetroButton className="w-full gap-2 group-hover:bg-coral-pop group-hover:text-white">
                    Add to Cart <span className="bg-sunrise-amber text-espresso-dark w-5 h-5 rounded-full flex items-center justify-center text-xs">+</span>
                  </RetroButton>
                </div>
              </article>
            ))}
          </div>

          {/* View Full Menu Link */}
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-display font-bold text-xl text-cream-white border-2 border-cream-white px-6 py-3 rounded-full hover:bg-cream-white hover:text-terracotta-warm transition-colors"
            >
              View Full Menu →
            </Link>
          </div>
        </div>

        <WaveDivider color="var(--sunrise-amber)" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           HERITAGE SECTION - Our Story
         ═══════════════════════════════════════════════════════════════ */}
      <section id="heritage" className="bg-sunrise-amber py-24 relative overflow-hidden">
        {/* Wood grain texture overlay */}
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
              <p className="text-xl leading-relaxed">
                <span className="float-left font-display text-[5rem] font-extrabold leading-[0.8] mr-4 mt-2 text-terracotta-warm">I</span>
                n 1973, Uncle Lim opened his first kopitiam stall at Tiong Bahru Market. With nothing but a trusty coffee sock, a worn marble table, and recipes passed down through generations, he began serving what would become Singapore&apos;s most beloved morning ritual.
              </p>

              {/* Quote Block */}
              <div className="bg-white/30 rounded-2xl p-8 relative border-[3px] border-dashed border-terracotta-warm my-12">
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
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: "☕", title: "Authentic Recipes", desc: "Three generations of heritage" },
                  { icon: "🤝", title: "Community First", desc: "Direct partnerships" },
                  { icon: "🌱", title: "Sustainable", desc: "ASEAN sourced beans" },
                ].map((val) => (
                  <div key={val.title} className="text-center bg-white/20 p-4 rounded-xl">
                    <div className="text-4xl mb-2">{val.icon}</div>
                    <h4 className="font-bold text-sm mb-1">{val.title}</h4>
                    <p className="text-xs text-mocha-medium leading-tight">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Side with CTA */}
            <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-8 duration-700">
              {/* Polaroid Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "1973", caption: "Uncle Lim's first stall" },
                  { label: "1980s", caption: "Vintage cup collection" },
                  { label: "Today", caption: "Modern Tiong Bahru café" },
                ].map((photo, i) => (
                  <div
                    key={photo.label}
                    className={`bg-cream-white p-3 pb-8 rounded-lg shadow-lg ${i === 0 ? "-rotate-2" : i === 1 ? "rotate-3" : "-rotate-1"
                      } ${i === 2 ? "col-span-2 max-w-[200px] mx-auto" : ""} hover:rotate-0 hover:scale-105 transition-all duration-300`}
                  >
                    <div className="h-24 bg-gradient-to-br from-honey-light to-cinnamon-glow rounded flex items-center justify-center font-display text-2xl text-mocha-medium">
                      {photo.label}
                    </div>
                    <p className="text-center font-display text-sm text-mocha-medium mt-3">{photo.caption}</p>
                  </div>
                ))}
              </div>

              <div className="bg-espresso-dark text-cream-white rounded-[2rem] p-10 text-center max-w-md shadow-xl">
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
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           LOCATIONS SECTION
         ═══════════════════════════════════════════════════════════════ */}
      <section id="locations" className="bg-sage-fresh py-24 relative overflow-hidden">
        {/* Circle pattern background */}
        <div className="absolute inset-0 bg-texture-circles bg-[length:100px_100px] opacity-15 pointer-events-none" />

        <div className="container relative z-10">
          <div className="section-header text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-5xl text-cream-white mb-4">Find Your Nearest Kopitiam</h2>
            <p className="text-cream-white/90 text-xl max-w-2xl mx-auto">
              Three locations across Singapore, each with its own unique character
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {LOCATIONS.map((loc, i) => (
              <article
                key={loc.id}
                className="location-card bg-cream-white rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex justify-between items-center p-6 bg-espresso-dark">
                  <h3 className="text-xl font-bold text-cream-white m-0">{loc.name}</h3>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-espresso-dark bg-sunrise-amber px-3 py-1 rounded-full">
                    {loc.badge}
                  </span>
                </div>

                <div className="h-[180px] bg-gradient-to-br from-sage-fresh to-honey-light flex items-center justify-center text-6xl">
                  {loc.image}
                </div>

                <div className="p-6">
                  <p className="font-bold text-espresso-dark mb-2 text-lg">{loc.address}</p>
                  <p className="text-mocha-medium mb-6 text-sm">{loc.hours}</p>

                  <div className="flex flex-col gap-2 mb-8">
                    {loc.features.map((feature) => (
                      <span key={feature} className="text-sm text-mocha-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral-pop" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-6 border-t-2 border-dashed border-butter-toast bg-vintage-paper -mx-6 -mb-6 p-6">
                    <RetroButton className="flex-1 w-full text-sm h-10">
                      Get Directions
                    </RetroButton>
                    <RetroButton variant="secondary" className="flex-1 w-full text-sm h-10 border-espresso-dark text-espresso-dark hover:bg-espresso-dark hover:text-cream-white">
                      Details
                    </RetroButton>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="h-[400px] bg-white/20 rounded-[2rem] border-[3px] border-dashed border-white/30 flex flex-col items-center justify-center relative backdrop-blur-sm">
            <h3 className="text-cream-white font-display text-2xl mb-2">Singapore Island Wide</h3>
            <p className="text-cream-white/80 mb-8">Click on any marker to view details</p>

            <div className="flex gap-12">
              <MapMarker delay="0s" />
              <MapMarker delay="0.3s" />
              <MapMarker delay="0.6s" />
            </div>
          </div>

          {/* Delivery CTA */}
          <div className="text-center mt-12 text-cream-white">
            <p className="mb-4">Can&apos;t visit? Order via <strong>GrabFood</strong>, <strong>FoodPanda</strong>, or <strong>Deliveroo</strong>.</p>
            <RetroButton className="bg-coral-pop border-coral-pop hover:bg-terracotta-warm hover:border-terracotta-warm">
              Order Delivery
            </RetroButton>
          </div>
        </div>
      </section>
    </main>
  )
}
