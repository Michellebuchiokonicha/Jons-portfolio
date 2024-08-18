 "use client"

import { useState } from "react";

//  const Navbar = () => {
//     const [isOpen, setIsOpen ] = useState(false)

    //  return (
//       <nav className="bg-white shadow-md">
//      {/* <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50"> */}
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           <a href="/" className="text-2xl font-bold text-gray-800">
//             JACA
//           </a>
//           <div className="md:hidden">
//             <button
//              onClick={() => setIsOpen(!isOpen)}
//              type="button"
//              className="text-gray-800 hover:text-gray-600 focus:outline-none">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
//                  xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ?  'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
//                  </svg>
//              </button>
//           </div>
//           <div className={`md:flex ${isOpen ? 'block' : 'hidden'} space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
//             <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
//             <a href="#projects" className="text-gray-800 hover:text-gray-600">Projects</a>
//             <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
//           </div>
//         </div>
//       </nav>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="text-gray-800">
               JACA
              </div>
          </div> 
          <div className="flex text-center items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
           
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


 export default Navbar;
  