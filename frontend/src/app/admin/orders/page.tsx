"use client"

import { RetroBadge } from "@/components/ui/retro/badge"

const ORDERS = [
  { id: "INV-001", customer: "Uncle Lim", total: "S$ 15.50", status: "pending" },
  { id: "INV-002", customer: "Sarah Tan", total: "S$ 8.20", status: "confirmed" },
  { id: "INV-003", customer: "John Doe", total: "S$ 22.00", status: "completed" },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl text-espresso-dark">Order Management</h1>

      <div className="bg-white rounded-xl shadow-sm border border-espresso-dark/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-latte-cream border-b border-espresso-dark/10">
            <tr>
              <th className="p-4 font-bold text-espresso-dark">Invoice</th>
              <th className="p-4 font-bold text-espresso-dark">Customer</th>
              <th className="p-4 font-bold text-espresso-dark">Total</th>
              <th className="p-4 font-bold text-espresso-dark">Status</th>
              <th className="p-4 font-bold text-espresso-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order) => (
              <tr key={order.id} className="border-b border-espresso-dark/5 hover:bg-latte-cream/20">
                <td className="p-4 font-mono text-sm">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4 font-bold">{order.total}</td>
                <td className="p-4">
                  <RetroBadge variant={
                    order.status === 'completed' ? 'default' : 
                    order.status === 'confirmed' ? 'secondary' : 'outline'
                  }>
                    {order.status}
                  </RetroBadge>
                </td>
                <td className="p-4">
                  <button className="text-sm text-sunrise-coral hover:underline font-bold">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
