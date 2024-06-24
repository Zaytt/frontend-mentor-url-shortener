import React, { useEffect, useState } from 'react'
import useStore from '../useStore'
import ShortenedLink from './ShortenedLink'

const urlPattern =
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi

const errors = {
  empty: 'Please add a link',
  noUrl: 'Please enter a valid url',
  already: 'URL already shortened',
  limit: 'Daily limit reached. Retry in 24 hours.',
}
const ShortBar = () => {
  const addLink = useStore((state) => state.addLink)
  const links = useStore((state) => state.links)
  const [link, setLink] = useState('')
  const [hasError, setHasError] = useState('')
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value)
    setHasError('')
  }

  const handleShort = (e: React.FormEvent) => {
    e.preventDefault()

    if (!link) {
      setHasError('empty')
      return
    }
    if (!link.match(urlPattern)) {
      console.log(link.match(urlPattern))
      setHasError('noUrl')
      return
    }
    if (links.find((existingLink) => existingLink.original === link)) {
      setHasError('already')
      return
    }
    if (links.length >= 10) {
      setHasError('limit')
      return
    }

    addLink(link)
  }

  return (
    <div className="top-[-84px] relative w-[100%]">
      <div className="w-[100%] bg-tuna flex justify-center rounded-[10px]">
        <form
          className="w-full bg-[url('/images/bg-shorten-mobile.svg')] lg:bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover rounded-[10px] flex justify-center items-center lg:flex-row flex-col gap-y-4 xl:px-[84px] lg:px-[48px] px-[24px] lg:py-[52px] py-[26px] gap-x-[24px]"
          onSubmit={() => {}}
        >
          <div className="relative w-full flex flex-col">
            <input
              id="urlInput"
              name="url"
              type="url"
              required
              aria-required="true"
              placeholder="Shorten a link here..."
              value={link}
              onChange={handleChange}
              className={`h-[64px]  w-[100%] rounded-[10px] placeholder:text-charcoal placeholder:opacity-50 text-charcoal text-[20px] tracking-[0.15px] leading-[36px] px-8 ${
                hasError && 'border-error border-[3px]'
              }`}
            />
            {hasError && (
              <span className="lg:absolute relative lg:top-[64px] mt-2 italic text-error tracking-[-0.11px]">
                {errors[hasError]}
              </span>
            )}
          </div>
          <button
            className="bg-primary hover:bg-faded text-white font-bold text-[20px] w-[100%] lg:w-[188px] h-[64px] rounded-[10px]"
            onClick={handleShort}
          >
            Shorten It!
          </button>
        </form>
      </div>
      <div className={`${links.length && 'mt-8'} flex flex-col gap-y-4`}>
        {links.map((link, index) => (
          <ShortenedLink link={link} key={`link-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ShortBar
