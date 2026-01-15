import { create } from 'zustand'

interface FilterState {
  activeCategory: string
  setCategory: (category: string) => void
}

export const useFilterStore = create<FilterState>((set) => ({
  activeCategory: 'all',
  setCategory: (category) => set({ activeCategory: category }),
}))
