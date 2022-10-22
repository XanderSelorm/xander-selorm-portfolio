import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-blue text-white">
      <div className="flex items-center justify-between h-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <div className="relative w-100 h-50">
            <Image
              // layout="fill"
              src="/icons/logo.svg"
              width={120}
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

            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Career
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Community
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
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
          <div className="md:hidden bg-white rounded-lg" id="mobile-menu">
            <div
              ref={ref}
              className="max-w-5xl mx-auto px-6 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <ul className="flex flex-col items-center gap-6 text-sm">
                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">About Me</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">Career</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">Projects</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">Community</Link>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Link href="/">Blog</Link>
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
