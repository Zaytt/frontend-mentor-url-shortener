import { create } from 'zustand'
import { getUserLocalStorage } from './utils/localStorageUtils'

export interface Link {
  original: string
  short: string
}

interface LinksState {
  links: Link[]
  loadLinks: () => void
  addLink: (link: string) => void
  removeLink: (index: number) => void
  clearLinks: () => void
}

const url = 'http://localhost:5000/api/url'

const useStore = create<LinksState>((set) => ({
  links: [],
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
    const res = await fetch(`${url}/shorten`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalUrl, userId }),
    })

    const response = await res.json()
    const shortLink = {
      original: response.originalUrl,
      short: `https://short.ly/${response.shortUrl}`,
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
}))

export default useStore
