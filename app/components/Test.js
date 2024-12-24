import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import JACA from '../../public/jaca-logo.png';
import Image from 'next/image';

const navigationItems = [
  { id: 'services', name: 'Services', link: "/#service" },
  { id: 'about', name: 'About', link: "/#about" },
  { id: 'experience', name: 'Experience', link: "/#experience" },
  { id: 'awards', name: 'Awards & Media', link: "/awards" },
  { id: 'speaking', name: 'Speaking', link: "/speaking" },
  { id: 'contact', name: 'Contact Me', link: "/#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('services');
  const router = useRouter();

  useEffect(() => {
    if (router?.pathname) {
      const currentPath = window.location.hash || router.pathname;
      const activeItem = navigationItems.find((item) => currentPath.includes(item.link));
      if (activeItem) {
        setActiveNav(activeItem.link);
      }
    }
  }, [router?.pathname]);

  // Scroll to section on load if there's a hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  const scrollToSection = (link) => {
    const sectionId = link.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveNav(link);
    if (link.startsWith('#')) {
      scrollToSection(link);
    } else {
      router.push(link);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-300 md:mb-2 mb-4">
      {({ open }) => (
        <>
          <div className="bg-gray-300 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#122455] hover:bg-[#122455] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Toggle menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="text-[#122455]">
                  <a href="/">
                    <Image src={JACA.src} alt="JACA Logo" width={150} height={150} priority />
                  </a>
                </div>
              </div>

              {/* Desktop navigation */}
              <div className="flex text-center items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        onClick={(e) => handleNavClick(e, item.link)}
                        aria-current={activeNav === item.link ? 'page' : undefined}
                        className={classNames(
                          activeNav === item.link
                            ? 'bg-[#122455] text-gray-300'
                            : 'text-[#122455] hover:bg-[#122455] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
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

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationItems.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className={classNames(
                    activeNav === item.link
                      ? 'bg-[#122455] text-white'
                      : 'text-[#122455] hover:bg-[#122455] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
