import React from 'react'
import Navbar from './Navbar'
import CTOButton from './CTAButton'

const Hero = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-start w-full ">
      <Navbar />
      <div className="mt-8 lg:mt-[140px] flex lg:justify-start flex-col-reverse lg:flex-row sm:items-center items-start w-full bg-transparent gap-x-[102px] ">
        <div className="lg:max-w-[564px] mt-9 lg:mt-0 flex flex-col items-center lg:items-start">
          <h1 className="text-center lg:text-left text-[42px] lg:text-[72px] xl:text-[80px] text-charcoal font-bold lg:tracking-[-2px] tracking-[-1.05px] leading-[48px] lg:leading-[90px]">
            More than just shorter links
          </h1>
          <h2 className="text-center lg:text-left font-medium xl:text-[22px]  lg:text-[20px] text-[18px] lg:max-w-[490px] xl:max-w-full text-grey tracking-[0.15px] leading-[30px] lg:leading-[36px] mb-[38px] mt-4 lg:mt-0 relative z-10">
            {`Build your brand's recognition and get detailed insights on how your links are performing.`}
          </h2>
          <CTOButton />
        </div>
        <div className="xl:w-[733px] w-[500px] xl:ml-[102px] lg:ml-[76px] overflow-hidden lg:absolute xl:left-[733px] lg:left-[calc(100%-500px)] top-[96px] lg:top-[166px]">
          <img
            src="/images/illustration-working.svg"
            className="w-full h-full object-cover object-left-bottom"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Hero
