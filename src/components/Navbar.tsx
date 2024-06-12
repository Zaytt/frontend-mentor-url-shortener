import React from 'react'
import Logo from './Logo'
// import svgLogo from '../../public'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      {toggleMenu && (
        <div
          id="menu"
          className={`${
            toggleMenu ?? 'hidden'
          } lg:hidden absolute w-full top-[96px] px-6`}
        >
          <div className="bg-tuna flex flex-col gap-y-7 justify-center items-center rounded-[10px] px-8 py-10 text-white text-[18px] font-bold">
            <button title="Features">Features</button>
            <button title="Pricing">Pricing</button>
            <button title="Resources">Resources</button>
            <div className="border-t-[1px] border-grey opacity-25 w-full"></div>
            <button title="Login">Login</button>
            <button
              title="Sign Up"
              className="w-full h-[48px] rounded-[28px] bg-primary hover:bg-faded"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
      <div className="mt-12 flex justify-between items-center text-grey text-[15px] w-full">
        <div className="flex justify-start items-center ">
          <Logo className="fill-charcoal mr-9" />
          <div className="lg:flex hidden justify-start items-center gap-x-8 ">
            <a className="hover:text-charcoal cursor-pointer">Features</a>
            <a className="hover:text-charcoal cursor-pointer">Pricing</a>
            <a className="hover:text-charcoal cursor-pointer">Resources</a>
          </div>
        </div>
        <div className="lg:flex justify-end items-center gap-x-9 lg:visible hidden">
          <a className="hover:text-charcoal cursor-pointer">Login</a>
          <button className="bg-primary hover:bg-faded rounded-[28px] text-white px-8 py-2">
            Sign Up
          </button>
        </div>
        <div className="lg:hidden">
          <button id="hamburger" onClick={handleToggle}>
            <Logo className="fill-charcoal mr-9" />{' '}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
