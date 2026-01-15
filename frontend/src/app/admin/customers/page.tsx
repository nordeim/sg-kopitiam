"use client"

import { RetroButton } from "@/components/ui/retro/button"

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-3xl text-espresso-dark">Customer PDPA Logs</h1>
        <RetroButton size="sm" variant="secondary">Export CSV</RetroButton>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-espresso-dark/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-latte-cream border-b border-espresso-dark/10">
            <tr>
              <th className="p-4 font-bold text-espresso-dark">Identifier Hash</th>
              <th className="p-4 font-bold text-espresso-dark">Consent Type</th>
              <th className="p-4 font-bold text-espresso-dark">Timestamp</th>
              <th className="p-4 font-bold text-espresso-dark">Wording Hash</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-espresso-dark/5">
              <td className="p-4 font-mono text-xs text-coffee-medium">8a7d...92c1</td>
              <td className="p-4">Marketing</td>
              <td className="p-4 text-sm">2024-01-15 09:30:00</td>
              <td className="p-4 font-mono text-xs text-coffee-medium">e2b1...88fa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
