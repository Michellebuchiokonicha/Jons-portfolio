"use client"

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen ] = useState(false)

    return (
      <nav className="bg-white shadow-md">
     {/* <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50"> */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            JACA
          </a>
          <div className="md:hidden">
            <button
             onClick={() => setIsOpen(!isOpen)}
             type="button"
             className="text-gray-800 hover:text-gray-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ?  'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                 </svg>
             </button>
          </div>
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
            <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="#projects" className="text-gray-800 hover:text-gray-600">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar;
  