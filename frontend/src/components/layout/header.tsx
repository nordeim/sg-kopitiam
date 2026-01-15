"use client"

import * as React from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { RetroButton } from "@/components/ui/retro/button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-sticky transition-all duration-300 border-b-4",
        isScrolled
          ? "bg-espresso-dark/95 backdrop-blur-md border-sunrise-coral py-2 shadow-lg"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex flex-col gap-0.5 group hover:scale-105 transition-transform duration-300"
          aria-label="Morning Brew Collective Home"
        >
          <span className="font-display text-2xl font-extrabold text-latte-cream tracking-tight">
            Morning Brew
          </span>
          <span className="font-display text-xs font-bold text-sunrise-coral uppercase tracking-[0.15em]">
            Collective
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {["Menu", "Our Story", "Visit Us", "Order"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-") === "order" ? "menu" : item.toLowerCase().replace(" ", "-") === "our-story" ? "heritage" : item.toLowerCase().replace(" ", "-") === "visit-us" ? "locations" : item.toLowerCase()}`}
                  className="relative text-latte-cream font-bold text-base hover:text-sunrise-coral transition-colors duration-200 group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-sunrise-coral transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="relative w-12 h-12 flex items-center justify-center bg-sunrise-coral/15 rounded-full hover:bg-sunrise-coral hover:scale-110 transition-all duration-300 group"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-6 h-6 text-latte-cream stroke-[2]" />
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-sunrise-coral text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-espresso-dark">
              0
            </span>
          </button>

          <button
            className="md:hidden p-2 text-latte-cream"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-espresso-dark z-overlay flex flex-col items-center justify-center gap-8 transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-latte-cream hover:bg-sunrise-coral transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        {["Menu", "Our Story", "Visit Us", "Order"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-") === "order" ? "menu" : item.toLowerCase().replace(" ", "-") === "our-story" ? "heritage" : item.toLowerCase().replace(" ", "-") === "visit-us" ? "locations" : item.toLowerCase()}`}
            className="font-display text-4xl font-bold text-latte-cream hover:text-sunrise-coral transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  )
}
