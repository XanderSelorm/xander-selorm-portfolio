import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare,  } from 'react-icons/fa';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-10 h-auto">
      <div className="flex flex-col items-center justify-center max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full my-8 gap-x-4 gap-y-4">
          <div className="flex flex-1 justify-center sm:justify-start">
            <div>
              <Link href="">
                <button className="btn btn-solid">{`Let's talk`}</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 space-y-3 text-center sm:text-start">
            <h4 className="footerHeading">Follow Me</h4>

            <ul className="flex space-x-3 justify-center sm:justify-start">
              <li>
                <Link href="https://web.linkedin.com/in/XanderSelorm/">
                  <FaLinkedin className="text-2xl rounded-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://web.twitter.com/XanderSelorm/">
                  <FaTwitterSquare className="text-2xl rounded-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/XanderSelorm/">
                  <FaFacebookSquare className="text-2xl rounded-lg" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/xanderselorm/">
                  <FaInstagram className="text-2xl rounded-lg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full items-center justify-center sm:justify-start text-base">
          <a>Copyright &copy; 2020, Xander Selorm. All rights reserved.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
