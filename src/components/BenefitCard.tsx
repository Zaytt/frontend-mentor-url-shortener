import React from 'react'

type CardProps = {
  title: string
  text: string
  index: number
}

const icons = [
  '/images/icon-brand-recognition.svg',
  '/images/icon-detailed-records.svg',
  '/images/icon-fully-customizable.svg',
]

const tops = ['top-[-44px]', 'top-[0px]', 'top-[44px]']

const BenefitCard: React.FC<CardProps> = ({ title, text, index }) => {
  return (
    <div
      className={`xl:w-[350px] w-[327px] h-[267px] bg-white relative flex flex-col justify-end items-center lg:items-start rounded-[5px] px-8 gap-y-[10px] pb-[41px] ${tops[index]}`}
    >
      <div className="bg-purple rounded-[50%] w-[88px] h-[88px] absolute flex justify-center items-center top-[-44px]">
        <img src={icons[index]} alt="icon"></img>
      </div>
      <span className="text-[22px] text-charcoal text-bold lg:text-left text-center">
        {title}
      </span>
      <span className="text-[15px] text-grey text-medium lg:text-left text-center">
        {text}
      </span>
    </div>
  )
}

export default BenefitCard
