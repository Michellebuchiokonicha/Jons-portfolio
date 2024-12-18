import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const navigationItems = [
  { id: '', name: 'JACA' },
  { id: 'services', name: 'Services' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'awards', name: 'Awards', isPage: true },
  { id: 'speaking', name: 'Speaking', isPage: true },
  { id: 'contact', name: 'Contact Me' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('services');
  const router = useRouter();

  useEffect(() => {
    if (router?.pathname) {
      // const path = router.pathname;
      const path = router.pathname.split('/')[1] || '';
      const activeItem = navigationItems.find((item) =>
        item.isPage ? path === item.id : path === ''
      );
      if (activeItem) {
        setActiveNav(activeItem.id);
      }
    }
  }, [router?.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, id, isPage) => {
    e.preventDefault();
    setActiveNav(id);
    if (isPage) {
      router.push(`/${id}`);
    } else {
      if (router?.pathname === '/') {
       
        scrollToSection(id);
      } else {
    
        router.push(`/#${id}`);
      }
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-300 md:mb-2 mb-4">
      <div className="bg-gray-300 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#122455] hover:bg-[#122455] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {/* <div className="absolute inset-y-0 cursor-pointer right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="text-[#122455]" >JACA</div>
          </div> */}
          <div className="flex text-center items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.isPage ? `/${item.id}` : `#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id, item.isPage)}
                    aria-current={activeNav === item.id ? 'page' : undefined}
                    className={classNames(
                      activeNav === item.id || activeNav ===item.isPage ? 'bg-[#122455] text-gray-300'
                      // : activeNav === item.isPage ? 'bg-[#122455] text-gray-300'
                      : 'text-[#122455] hover:bg-[#122455] hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div> */}
            <div className="hidden sm:ml-6 sm:block">
  <div className="flex space-x-4">
  {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.isPage ? `/${item.id}` : `#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id, item.isPage)}
                  aria-current={activeNav === item.id ? 'page' : undefined}
                  className={classNames(
                    activeNav === item.id
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

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationItems.map((item) => (
            <DisclosureButton
              key={item.id}
              as="a"
              href={item.isPage ? `/${item.id}` : `#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id, item.isPage)}
              className={classNames(
                activeNav === item.id
                  ? 'bg-[#122455] text-white'
                  : 'text-[#122455] hover:bg-[#122455] hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
