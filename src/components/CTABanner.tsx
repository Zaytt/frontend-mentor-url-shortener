import React from 'react'
import CTOButton from './CTAButton'

const CallToActionBanner = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[57px] gap-y-[32px] ">
      <div className="font-bold text-white leading-[48px] tracking-[-1px] lg:text-[40px] text-[28px]">
        Boost your links today
      </div>
      <CTOButton />
    </div>
  )
}

export default CallToActionBanner
