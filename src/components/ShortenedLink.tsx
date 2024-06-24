import React, { useState } from 'react'
import { Link } from '../useStore'

interface ShortenedLinkProps {
  link: Link
}
const ShortenedLink: React.FC<ShortenedLinkProps> = ({ link }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(link.short)
    setCopied(true)
  }

  return (
    <div className="bg-white py-4 pl-8 pr-6 flex lg:flex-row flex-col justify-between rounded-[5px]">
      <span className="text-charcoal text-[20px] leading-[36px] tracking-[0.15px] mb-[6px] lg:mb-0">
        {link.original}
      </span>
      <span className="lg:hidden border-grey border-b-[1px] ml-[-32px] mr-[-24px] opacity-25"></span>
      <span className="text-primary text-[20px] leading-[36px] tracking-[0.15px] lg:ml-auto mb-[8px] lg:mb-0 mt-[6px] lg:mt-0">
        {link.short}
      </span>
      <button
        className={`w-full lg:w-[103px] h-[40px]  ${
          !copied && 'hover:bg-faded'
        } lg:ml-8 rounded-[5px] text-white ${
          copied ? 'bg-purple' : 'bg-primary'
        }  `}
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export default ShortenedLink
