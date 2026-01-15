import { SunburstBackground } from "@/components/decorative/sunburst-background"
import { FloatingCoffeeCup } from "@/components/decorative/floating-coffee-cup"
import { WaveDivider } from "@/components/ui/wave-divider"
import { RetroButton } from "@/components/ui/retro/button"
import { Coffee } from "lucide-react"
import Link from "next/link"

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

      {/* Placeholder for other sections to verify scroll */}
      <section className="h-[50vh] bg-terracotta-warm flex items-center justify-center relative">
        <h2 className="text-4xl font-display text-cream-white">Menu Section Placeholder</h2>
        <WaveDivider color="var(--sunrise-amber)" />
      </section>
    </main>
  )
}
