import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import Hero from './hero';
import SectionWithBgImage from './section-with-bg';

const Footer = () => {
  return (
    <footer className='card h-[50dvh] my-8 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 space-y-8'>
      <div className="flex flex-col space-y-5 text-center sm:text-start">
        <h4 className="text-center text-2xl">{`Let's Connect!`}</h4>

        <ul className="flex justify-center space-x-3">
          <li className="cursor-pointer">
            <Link
              href="mailto:parity_flame_3s@icloud.com"
              passHref
              target="_blank"
            >
              <FaGoogle className="rounded-lg text-xl" />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/XanderSelorm/"
              passHref
              target="_blank"
            >
              <FaLinkedin className="rounded-lg text-xl" />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="https://www.twitter.com/XanderSelorm/"
              passHref
              target="_blank"
            >
              <FaTwitterSquare className="rounded-lg text-xl" />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="https://www.facebook.com/XanderSelorm/"
              target="_blank"
            >
              <FaFacebookSquare className="rounded-lg text-xl" />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="https://www.instagram.com/xanderselorm/"
              passHref
              target="_blank"
            >
              <FaInstagram className="rounded-lg text-xl" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link className="btn btn-solid" href="mailto:parity_flame_3s@icloud.com" passHref target="_blank">
          Get in touch
        </Link>
      </div>

      <a>
        Copyright &copy; {new Date().getFullYear()}, Xander Selorm. All
        rights reserved.
      </a>
    </footer>
  );
};

export default Footer;
