import { create } from 'zustand'
import { getUserLocalStorage } from './utils/localStorageUtils'

export interface Link {
  original: string
  short: string
}

interface LinksState {
  links: Link[]
  copiedUrl: string
  loadLinks: () => void
  addLink: (link: string) => void
  removeLink: (index: number) => void
  clearLinks: () => void
  setCopiedUrl: (url: string) => void
}

const url = 'https://spoo.me/'

const useStore = create<LinksState>((set) => ({
  links: [],
  copiedUrl: '',
  loadLinks: async () => {
    const userId = getUserLocalStorage()
    const res = await fetch(`${url}/user/${userId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const response = await res.json()
    if (response.length) {
      const shortLinks = response.map((link) => {
        return {
          original: link.originalUrl,
          short: `https://short.ly/${link.shortUrl}`,
        }
      })
      set((state) => ({
        links: [...shortLinks],
      }))
    }
  },
  addLink: async (originalUrl: string) => {
    const userId = getUserLocalStorage()
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({ url: originalUrl }),
    })

    const response = await res.json()
    const shortLink = {
      original: originalUrl,
      short: `${response.short_url}`,
    }

    set((state) => ({
      links: [...state.links, shortLink],
    }))
  },
  removeLink: (index: number) =>
    set((state) => ({
      links: state.links.filter((_, i) => i !== index),
    })),
  clearLinks: () => set({ links: [] }),
  setCopiedUrl: (url) => set({ copiedUrl: url }),
}))

export default useStore
