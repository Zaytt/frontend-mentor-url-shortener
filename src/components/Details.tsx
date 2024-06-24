import React from 'react'
import BenefitCard from './BenefitCard'

const cards = [
  {
    title: 'Brand Recognition',
    text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    title: 'Detailed Records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    title: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
]

const Details = () => {
  return (
    <div className="bg-porcelain flex flex-col items-center justify-start w-full pt-[120px] pb-[164px] relative top-[-84px]">
      <div className="text-center flex flex-col gap-y-[18px] pb-[144px]">
        <h2 className="lg:text-[40px] text-[28px] font-bold lg:leading-[48px] leading-[48px] lg:tracking-[-1px] tracking-[-0.7px]">
          Advanced Statistics
        </h2>
        <h3 className="max-w-[540px] text-grey lg:text-[18px] text-[16px] lg:leading-[32px] leading-[28px] lg:tracking-[0.12px] tracking-[0.11px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h3>
      </div>
      <div className="flex lg:flex-row flex-col xl:gap-x-[30px] lg:gap-x-[16px] gap-y-[48px] relative items-center justify-center">
        <div className="absolute lg:w-full w-[8px] lg:h-[8px] h-full bg-primary lg:top-[50%] lg:left-0 left-[158x]"></div>
        {cards.map((card, index) => (
          <BenefitCard
            title={card.title}
            text={card.text}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Details
