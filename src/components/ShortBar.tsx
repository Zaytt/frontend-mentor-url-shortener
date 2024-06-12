import React from 'react'

const ShortBar = () => {
  return (
    <div className="xl:w-[1110px] lg:w-[100%] w-[100%] mx-8 bg-tuna flex justify-center rounded-[10px]">
      <div className="w-full bg-[url('/images/bg-shorten-mobile.svg')] lg:bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat rounded-[10px] flex justify-center items-center lg:flex-row flex-col gap-y-4 xl:px-[84px] lg:px-[48px] px-[24px] lg:py-[52px] py-[26px] gap-x-[24px]">
        <input
          type="text"
          id="urlInput"
          name="url"
          placeholder="Shorten a link here..."
          className="h-[64px] max-w-[769px] lg:w-[69%] w-[100%] rounded-[10px] placeholder:text-charcoal placeholder:opacity-50 text-charcoal text-[20px] tracking-[0.15px] leading-[36px] px-8"
        />
        <button className="bg-primary text-white font-bold text-[20px] max-w-[769px] w-[100%] lg:w-[188px] h-[64px] rounded-[10px]">
          Shorten It!
        </button>
      </div>
    </div>
  )
}

export default ShortBar
