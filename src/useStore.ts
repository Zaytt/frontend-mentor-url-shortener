import { create } from 'zustand'

export interface Link {
  original: string
  short: string
}

interface LinksState {
  links: Link[]
  addLink: (link: Link) => void
  removeLink: (index: number) => void
  clearLinks: () => void
}

const useStore = create<LinksState>((set) => ({
  links: [],
  addLink: (link: Link) =>
    set((state) => ({
      links: [...state.links, link],
    })),
  removeLink: (index: number) =>
    set((state) => ({
      links: state.links.filter((_, i) => i !== index),
    })),
  clearLinks: () => set({ links: [] }),
}))

export default useStore
