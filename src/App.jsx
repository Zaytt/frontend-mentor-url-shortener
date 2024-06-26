import { useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import Hero from './components/Hero'
import Details from './components/Details'
import ShortBar from './components/ShortBar'
import CallToActionBanner from './components/CTABanner'
import Footer from './components/Footer'
import {
  setUserLocalStorage,
  getUserLocalStorage,
} from './utils/localStorageUtils'
import useStore from './useStore'

function App() {
  // const loadLinks = useStore((state) => state.loadLinks)
  // useEffect(() => {
  //   const userId = getUserLocalStorage()
  //   if (!userId) {
  //     const newUserId = uuidv4()
  //     setUserLocalStorage(newUserId)
  //   } else {
  //     loadLinks()
  //   }
  // }, [])

  return (
    <main className="w-full flex justify-center *:px-[24px] *:lg:px-[124px] *:xl:px-[165px] flex-col items-center *:w-full *:flex *:flex-col *:justify-start *:items-center">
      <section className="bg-white pb-[223px] overflow-hidden">
        <Hero />
      </section>
      <section className="bg-porcelain relative">
        <ShortBar />
        <Details />
      </section>
      <section className="bg-tuna bg-[url('/images/bg-boost-mobile.svg')] lg:bg-[url('/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover">
        <CallToActionBanner />
      </section>
      <section className="py-[71px] px-[164px] bg-dark w-full">
        <Footer />
      </section>
    </main>
  )
}

export default App
