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
      <section id="hero" className="relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-gradient-to-br from-latte-cream to-golden-hour-light/30">
        <SunburstBackground />
        
        <div className="container relative z-10">
          <div className="max-w-[700px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Vintage Badge */}
            <div className="inline-flex items-center gap-3 bg-espresso-dark text-latte-cream px-5 py-3 rounded-full font-display font-semibold text-sm mb-6 shadow-md border-2 border-dashed border-sunrise-coral hover:scale-105 transition-transform duration-300">
              < Coffee className="w-6 h-6" />
              <span>Est. 1973 • Singapore Heritage</span>
            </div>

            <h1 className="font-display font-bold text-espresso-dark leading-[1.1] mb-6 text-[clamp(2.5rem,6vw,4.5rem)]">
              Where Singapore&apos;s
              <span className="block text-sunrise-coral-dark italic">Morning Ritual</span>
              Begins
            </h1>

            <p className="text-xl text-coffee-medium mb-8 max-w-[550px] leading-relaxed">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t-2 border-dashed border-coffee-light/30">
              {[
                { number: "50+", label: "Years of Craft" },
                { number: "1000+", label: "Daily Brews" },
                { number: "3", label: "Locations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <span className="block font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-sunrise-coral-dark leading-none">
                    {stat.number}
                  </span>
                  <span className="text-sm font-bold text-coffee-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FloatingCoffeeCup />
        
        <WaveDivider 
          color="rgb(var(--color-sunrise-coral-dark))" 
          className="text-sunrise-coral-dark"
        />
      </section>

      {/* Placeholder for other sections to verify scroll */}
      <section className="h-[50vh] bg-sunrise-coral-dark flex items-center justify-center">
        <h2 className="text-4xl font-display text-latte-cream">Menu Section Placeholder</h2>
      </section>
    </main>
  )
}