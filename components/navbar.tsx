import { MouseEvent, Fragment, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import React from 'react';

const navItems = [
  {
    label: 'Projects',
    link: '#projects',
  },
  {
    label: 'Career',
    link: '#career',
  },
  {
    label: 'Community',
    link: '#community',
  },
  {
    label: 'Blog',
    link: 'https://dev.to/xanderselorm',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const myRef = useRef();

  const handleNavClick = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue py-3 text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <div className="w-100 h-50 relative cursor-pointer">
            <Image
              // layout="fill"
              src="/icons/icon-logo.png"
              width={50}
              height={50}
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
                  className="cursor-pointer text-white transition hover:text-gray-500/75"
                  onClick={handleNavClick}
                >
                  <div>{navItem.label}</div>
                </li>
              ))}
              {/* <li
                ref={myRef}
                className="text-white transition hover:text-gray-500/75"
              >
                <Link href="/">About Me</Link>
              </li>

              <li className="text-white transition hover:text-gray-500/75">
                <Link href="#career">Career</Link>
              </li>

              <li className="text-white transition hover:text-gray-500/75">
                <Link href="#projects">Projects</Link>
              </li>

              <li className="text-white transition hover:text-gray-500/75">
                <Link href="#community">Community</Link>
              </li>

              <li className="text-white transition hover:text-gray-500/75">
                <Link href="https://dev.to/xanderselorm">Blog</Link>
              </li> */}
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
          <div className="rounded-lg bg-white md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="mx-auto max-w-5xl space-y-1 px-6 pt-2 pb-3 sm:px-3"
            >
              <ul className="flex flex-col items-center gap-6 text-sm">
                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">About Me</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">Career</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="#projects">Projects</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">Community</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="https://dev.to/xanderselorm">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
