"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ShoppingBag, Box, Users, FileText, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/inventory", label: "Inventory", icon: Box },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/invoices", label: "Invoices", icon: FileText },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-espresso-dark text-latte-cream h-screen fixed left-0 top-0 overflow-y-auto flex flex-col">
      <div className="p-6 border-b border-white/10">
        <span className="font-display text-xl font-bold">Kopitiam Admin</span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === item.href
                ? "bg-sunrise-coral text-white"
                : "hover:bg-white/10 text-latte-cream/80 hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-bold text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-bold text-sm">Logout</span>
        </button>
      </div>
    </aside>
  )
}
