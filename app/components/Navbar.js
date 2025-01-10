"use client";

import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import JACA from '../../public/jaca-logo.png';

const navigationItems = [
  { id: 'about', name: 'About', link: '/#about' },
  { id: 'experience', name: 'Experience', link: '/#experience' },
  { id: 'services', name: 'Services', link: '/#services' },
  { id: 'awards', name: 'Awards & Media', link: '/awards' },
  { id: 'speaking', name: 'Speaking', link: '/speaking' },
  { id: 'contact', name: 'Contact Me', link: '/#contact' },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('about');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const currentPath = window.location.hash || window.location.pathname;
      const activeItem = navigationItems.find((item) => currentPath.includes(item.link));
      if (activeItem) {
        setActiveNav(activeItem.id);
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const handleNavClick = (e, link, id) => {
    e.preventDefault();
    setActiveNav(id);
    router.push(link);
    const sectionId = link.replace('/#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-300 sticky top-2 z-50 shadow-md">
      {({ open }) => (
        <>
          <div className="bg-gray-300 mx-auto max-w-7xl py-1 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#122455] hover:bg-[#122455] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Toggle menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="text-[#122455]">
                  <a href="/">
                    <Image src={JACA.src} alt="JACA Logo" width={150} height={150} priority />
                  </a>
                </div>
              </div>
              <div className="flex text-center items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        onClick={(e) => handleNavClick(e, item.link, item.id)}
                        className={`${
                          activeNav === item.id
                            ? 'bg-[#122455] text-white'
                            : 'text-[#122455] hover:bg-[#122455] hover:text-white'
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        aria-current={activeNav === item.id ? 'page' : undefined}
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
              {navigationItems.map((item) => (
                <DisclosureButton
                  key={item.id}
                  as="a"
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link, item.id)}
                  className={`${
                    activeNav === item.id
                      ? 'bg-[#122455] text-white'
                      : 'text-[#122455] hover:bg-[#122455] hover:text-white'
                  } block rounded-md px-3 py-2 text-lg font-medium`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
