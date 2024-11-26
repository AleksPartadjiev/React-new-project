import React from 'react';
import logo from '../assets/logo/logo.png';

const Header = () => {
  return (
    <header className="bg-black fixed w-full ">
      <nav className="mx-auto flex  items-center justify-between p- lg:px-9  " aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-20 w-20" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/men" className="text-sm/6 font-semibold text-white">Men</a>
          <a href="#" className="text-sm/6 font-semibold text-white">Women</a>
          <a href="#" className="text-sm/6 font-semibold text-white">Kids</a>
          <a href="#" className="text-sm/6 font-semibold text-white">Accesories</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>

  )
}

export default Header