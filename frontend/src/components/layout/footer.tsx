import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { RetroBadge } from "@/components/ui/retro/badge"

export function Footer() {
  return (
    <footer className="relative bg-espresso-dark text-latte-cream pt-16 mt-24">
      {/* Decorative Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-2 w-full"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            rgb(var(--color-sunrise-coral)) 0px,
            rgb(var(--color-sunrise-coral)) 20px,
            rgb(var(--color-golden-hour)) 20px,
            rgb(var(--color-golden-hour)) 40px,
            rgb(var(--color-sunrise-coral-dark)) 40px,
            rgb(var(--color-sunrise-coral-dark)) 60px
          )`
        }}
      />

      <div className="container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-2xl font-extrabold text-latte-cream">
                Morning Brew
              </span>
              <span className="font-display text-xs font-bold text-sunrise-coral uppercase tracking-[0.15em]">
                Collective
              </span>
            </div>
            <p className="text-latte-cream/80 leading-relaxed text-sm">
              Authentic Singaporean kopitiam heritage since 1973. 
              Roasted in-house, brewed with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-golden-hour font-display font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { label: "Our Menu", href: "/menu" },
                { label: "Our Story", href: "/heritage" },
                { label: "Locations", href: "/locations" },
                { label: "Order Online", href: "/menu" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-latte-cream/80 hover:text-sunrise-coral hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-golden-hour font-display font-bold text-lg mb-4">Visit Us</h3>
            <ul className="space-y-3 text-latte-cream/80 text-sm">
              <li>
                <strong className="block text-latte-cream">Tiong Bahru Flagship</strong>
                55 Tiong Bahru Road, #01-55
              </li>
              <li>
                <strong className="block text-latte-cream">Daily Hours</strong>
                7:00 AM - 8:00 PM
              </li>
              <li>
                <a href="tel:+6563338888" className="hover:text-sunrise-coral transition-colors">
                  +65 6333 8888
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Certs */}
          <div className="space-y-6">
            <h3 className="text-golden-hour font-display font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-sunrise-coral hover:-translate-y-1 transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <RetroBadge variant="ghost" className="bg-white/10 text-latte-cream/90">
                Halal Certified
              </RetroBadge>
              <RetroBadge variant="ghost" className="bg-white/10 text-latte-cream/90">
                Est. 1973
              </RetroBadge>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-latte-cream/60 text-sm">
          © {new Date().getFullYear()} Morning Brew Collective. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
