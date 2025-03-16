import { MouseEvent, Fragment, useRef, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import React from 'react';
import { useRouter } from 'next/router';
import { cn } from 'lib/utils';

const navItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'About Me',
    link: '/about-me',
  },
  {
    label: 'Blog',
    link: 'https://dev.to/xanderselorm',
    target: '_blank',
  },
  {
    label: 'Get in touch',
    link: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(`fixed top-0 z-50 w-full py-3 text-white`, scrolled ? 'bg-gradient-to-b from-primary' : '')}>
      <div className="w-full flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="block" href="/">
          <div className="w-100 h-50 relative cursor-pointer">
            <Image
              // layout="fill"
              src="/icons/icon-logo.png"
              width={40}
              height={40}
              alt=""
            />
          </div>
        </Link>

        <div className="md:flex md:items-center md:gap-12">
          <div className="hidden md:block" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            <ul className="flex items-center gap-10 text-sm">
              {navItems.map(navItem => (
                <li
                  key={navItem.link}
                  className={`cursor-pointer transition hover:text-secondary ${router.asPath == navItem.link ? 'text-secondary' : ''
                  }`}
                >
                  {' '}
                  <Link href={navItem.link} passHref>
                    <a target={navItem.target}>{navItem.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div
              className="rounded-lg bg-white py-5 md:hidden"
              id="mobile-menu"
            >
              <div
                ref={ref}
                className="mx-auto max-w-5xl space-y-1 px-6 pt-2 pb-3 sm:px-3"
              >
                <ul className="flex flex-col items-center gap-6 text-sm">
                  {navItems.map(navItem => (
                    <li
                      key={navItem.label}
                      className={` text-gray-500 transition hover:text-gray-500/75 ${
                        router.asPath == navItem.link ? 'text-secondary' : ''
                      }`}
                    >
                      <Link href={navItem.link} target={navItem.target}>
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
