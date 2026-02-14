import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { cn } from 'lib/utils';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'About Me', link: '/about-me' },
  {
    label: 'Blog',
    link: 'https://dev.to/xanderselorm',
    target: '_blank',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full text-foreground">
      <div
        className={cn(
          'py-3 flex justify-center transition-all duration-300',
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="w-full max-w-6xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="block" href="/">
            <div className="w-100 h-50 relative cursor-pointer rounded-lg bg-foreground dark:bg-transparent p-1.5">
              <Image src="/icons/icon-logo.png" width={40} height={40} alt="" />
            </div>
          </Link>

          <div className="md:flex md:items-center md:gap-12">
            <div
              className="hidden md:block"
              aria-labelledby="header-navigation"
            >
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>

              <ul className="flex items-center gap-8 text-sm font-medium">
                {navLinks.map(navItem => (
                  <li
                    key={navItem.link}
                    className={cn(
                      'cursor-pointer transition-colors relative py-1',
                      'hover:text-primary',
                      router.asPath === navItem.link
                        ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full'
                        : 'text-muted-foreground',
                    )}
                  >
                    <Link href={navItem.link} passHref target={navItem.target}>
                      {navItem.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Get in touch
                  </Link>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>

            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg bg-muted p-2 text-foreground transition hover:opacity-75"
              >
                <FaBars className="block h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-2 px-4 md:hidden">
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="rounded-xl bg-card/95 backdrop-blur-xl border border-border py-6 shadow-xl"
            id="mobile-menu"
          >
            <div className="mx-auto max-w-5xl space-y-1 px-6 pt-2 pb-3 sm:px-3">
              <ul className="flex flex-col items-center gap-6 text-sm font-medium">
                {navLinks.map(navItem => (
                  <li
                    key={navItem.label}
                    className={cn(
                      'text-card-foreground transition-colors hover:text-primary',
                      router.asPath === navItem.link ? 'text-primary' : '',
                    )}
                  >
                    <Link href={navItem.link} target={navItem.target}>
                      {navItem.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Get in touch
                  </Link>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
