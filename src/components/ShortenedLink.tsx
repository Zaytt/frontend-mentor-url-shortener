import React from 'react'
import { Link } from '../useStore'

interface ShortenedLinkProps {
  link: Link
}
const ShortenedLink: React.FC<ShortenedLinkProps> = ({ link }) => {
  return (
    <div className="bg-white py-4 pl-8 pr-6 flex justify-between rounded-[5px]">
      <span className="text-charcoal text-[20px] leading-[36px] tracking-[0.15px]">
        {link.original}
      </span>
      <div>
        <span className="text-primary text-[20px] leading-[36px] tracking-[0.15px]">
          {link.short}
        </span>
        <button className="w-[103px] h-[40px] bg-primary hover:bg-faded ml-8 rounded-[5px] text-white">
          Copy
        </button>
      </div>
    </div>
  )
}

export default ShortenedLink
