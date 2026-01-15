"use client"

import * as React from "react"
import Link from "next/link"
import type { Route } from "next"
import { ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cart-store"
import { CartSheet } from "@/components/cart/cart-sheet"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())
  
  // Initialize keyboard shortcuts
  useKeyboardShortcuts()

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
        "header transition-all duration-300",
        isScrolled
          ? "py-2 bg-espresso-dark/95 border-b-3 border-sunrise-amber shadow-lg"
          : "py-4 bg-espresso-dark/95 border-b-3 border-sunrise-amber"
      )}
      role="banner"
    >
      <div className="container header__inner flex items-center justify-between h-[80px]">
        {/* Logo with 70s Flair Verbatim */}
        <Link 
          href="/" 
          className="logo flex flex-col gap-1 hover:scale-[1.03] transition-transform duration-300"
          aria-label="Morning Brew Collective Home"
        >
          <span className="logo__main font-display text-2xl font-extrabold text-cream-white tracking-tight">
            Morning Brew
          </span>
          <span className="logo__sub font-display text-[0.75rem] font-semibold text-sunrise-amber uppercase tracking-[0.15em]">
            Collective
          </span>
        </Link>

        {/* Desktop Navigation Verbatim */}
        <nav className="nav hidden md:block" aria-label="Main navigation">
          <ul className="nav__list flex gap-8">
            {[
              { label: "Menu", href: "/menu" },
              { label: "Our Story", href: "/heritage" },
              { label: "Visit Us", href: "/locations" },
              { label: "Order", href: "/menu" }
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href as Route}
                  className="nav__link relative font-bold text-base text-cream-white px-4 py-2 rounded-full hover:text-sunrise-amber transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[24px] h-[3px] bg-sunrise-amber rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions Verbatim */}
        <div className="header__actions flex items-center gap-4">
          <CartSheet>
            <button
              className="cart-btn relative w-12 h-12 flex items-center justify-center bg-sunrise-amber/15 rounded-full hover:bg-sunrise-amber hover:scale-110 transition-all duration-300 group"
              aria-label={`Shopping cart, ${itemCount} items`}
            >
              <ShoppingCart className="w-6 h-6 text-cream-white stroke-[2]" />
              {itemCount > 0 && (
                <span className="cart-btn__count absolute -top-1 -right-1 min-w-[20px] h-5 bg-coral-pop text-white text-[0.75rem] font-bold flex items-center justify-center rounded-full border-2 border-espresso-dark animate-in zoom-in duration-300">
                  {itemCount}
                </span>
              )}
            </button>
          </CartSheet>

          <button
            className="menu-toggle flex flex-col gap-[5px] p-2 rounded-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="menu-toggle__line w-6 h-[2px] bg-cream-white rounded-full transition-all duration-300" />
            <span className="menu-toggle__line w-6 h-[2px] bg-cream-white rounded-full transition-all duration-300" />
            <span className="menu-toggle__line w-6 h-[2px] bg-cream-white rounded-full transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Verbatim */}
      <nav
        id="mobile-menu"
        className={cn(
          "mobile-menu fixed inset-0 bg-espresso-dark z-overlay flex flex-col items-center justify-center gap-8 transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          className="mobile-menu__close absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-cream-white hover:bg-sunrise-amber transition-colors text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {[
          { label: "Menu", href: "/menu" },
          { label: "Our Story", href: "/heritage" },
          { label: "Visit Us", href: "/locations" },
          { label: "Order", href: "/menu" }
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href as Route}
            className="mobile-menu__link font-display text-[2rem] font-bold text-cream-white hover:text-sunrise-amber transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
