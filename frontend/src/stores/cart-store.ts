import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { calculateGST } from '@/lib/utils'

export interface CartItem {
  id: string
  name: string
  price: number // stored as float (e.g., 3.50)
  quantity: number
  category: string
  image?: string
}

interface CartState {
  items: CartItem[]
  // History for Undo/Redo
  past: CartItem[][]
  future: CartItem[][]
  
  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  
  // Time Travel
  undo: () => void
  redo: () => void
  
  // Getters
  getItemCount: () => number
  getFinancials: () => { subtotal: number; gst: number; total: number }
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      past: [],
      future: [],

      addItem: (newItem) => set((state) => {
        const existingItem = state.items.find(i => i.id === newItem.id)
        const newItems = existingItem
          ? state.items.map(i => 
              i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [...state.items, { ...newItem, quantity: 1 }]
          
        // Save to history before updating, limit to 10 steps
        const newPast = [...state.past, state.items].slice(-10)
        
        return {
          items: newItems,
          past: newPast,
          future: [] // Clear future on new action
        }
      }),

      removeItem: (id) => set((state) => {
        const newPast = [...state.past, state.items].slice(-10)
        return {
          items: state.items.filter(i => i.id !== id),
          past: newPast,
          future: []
        }
      }),

      updateQuantity: (id, quantity) => set((state) => {
        if (quantity < 1) return state
        const newPast = [...state.past, state.items].slice(-10)
        return {
          items: state.items.map(i => 
            i.id === id ? { ...i, quantity } : i
          ),
          past: newPast,
          future: []
        }
      }),

      clearCart: () => set((state) => {
        const newPast = [...state.past, state.items].slice(-10)
        return {
          items: [],
          past: newPast,
          future: []
        }
      }),

      undo: () => set((state) => {
        if (state.past.length === 0) return state
        
        const previous = state.past[state.past.length - 1]
        const newPast = state.past.slice(0, state.past.length - 1)
        
        return {
          items: previous,
          past: newPast,
          future: [state.items, ...state.future]
        }
      }),

      redo: () => set((state) => {
        if (state.future.length === 0) return state
        
        const next = state.future[0]
        const newFuture = state.future.slice(1)
        
        return {
          items: next,
          past: [...state.past, state.items],
          future: newFuture
        }
      }),

      getItemCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0)
      },

      getFinancials: () => {
        const total = get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        return calculateGST(total)
      }
    }),
    {
      name: 'kopitiam-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        items: state.items,
        past: state.past,
        future: state.future 
      })
    }
  )
)
