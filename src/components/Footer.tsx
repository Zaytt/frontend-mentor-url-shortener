import React from 'react'
import Logo from './Logo'
import IconFacebook from './icons/IconFacebook'
import IconTwitter from './icons/IconTwitter'
import IconPinterest from './icons/IconPinterest'
import IconInstagram from './icons/IconInstagram'

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center lg:items-start">
      <div className="xl:mr-[256px] mb-[48px]">
        <Logo className="fill-white" />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:items-start text-[15px] text-grey w-full max-w-[461px] text-center gap-y-[40px] mb-[52px]">
        <div className="flex flex-col gap-y-[10px] justify-between">
          <div className="text-white mb-[12px] font-bold tracking-[-0.25px] text-[16px]">
            Features
          </div>
          <a className="cursor-pointer hover:text-primary">Link Shortening</a>
          <a className="cursor-pointer hover:text-primary">Branded Links</a>
          <a className="cursor-pointer hover:text-primary">Analytics</a>
        </div>
        <div className="flex flex-col lg:justify-between items-center lg:items-start  gap-y-[10px]">
          <div className="text-white mb-[12px] font-bold tracking-[-0.25px] text-[16px]">
            Resources
          </div>
          <a className="cursor-pointer hover:text-primary">Blog</a>
          <a className="cursor-pointer hover:text-primary">Developers</a>
          <a className="cursor-pointer hover:text-primary">Support</a>
        </div>
        <div className="flex flex-col lg:justify-between items-center lg:items-start  gap-y-[10px]">
          <div className="text-white mb-[12px] font-bold tracking-[-0.25px] text-[16px]">
            Company
          </div>
          <a className="cursor-pointer hover:text-primary">About</a>
          <a className="cursor-pointer hover:text-primary">Our Team</a>
          <a className="cursor-pointer hover:text-primary">Careers</a>
          <a className="cursor-pointer hover:text-primary">Contact</a>
        </div>
      </div>
      <div className="flex gap-x-[24px] xl:ml-[101px]">
        <IconFacebook className="fill-white hover:fill-primary cursor-pointer" />
        <IconTwitter className="fill-white hover:fill-primary cursor-pointer" />
        <IconPinterest className="fill-white hover:fill-primary cursor-pointer" />
        <IconInstagram className="fill-white hover:fill-primary cursor-pointer" />
      </div>
    </div>
  )
}

export default Footer
