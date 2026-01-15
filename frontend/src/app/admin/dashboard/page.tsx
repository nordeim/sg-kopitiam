"use client"

import { RetroButton } from "@/components/ui/retro/button"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-3xl text-espresso-dark">Dashboard</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Revenue", value: "S$ 12,450", change: "+12%" },
          { label: "Active Orders", value: "24", change: "+5" },
          { label: "Low Stock Items", value: "3", change: "Warning", warning: true },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white p-6 rounded-xl shadow-sm border border-espresso-dark/10">
            <p className="text-sm text-coffee-medium font-bold uppercase tracking-wider">{kpi.label}</p>
            <p className="font-display text-3xl text-espresso-dark mt-2">{kpi.value}</p>
            <span className={`text-xs font-bold ${kpi.warning ? 'text-red-500' : 'text-green-600'}`}>
              {kpi.change}
            </span>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-espresso-dark/10 h-80 flex items-center justify-center">
        <p className="text-coffee-medium italic">Sales Chart Loading...</p>
      </div>
    </div>
  )
}
