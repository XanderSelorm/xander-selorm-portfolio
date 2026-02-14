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
    <footer className='border-t border-border mt-16 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 space-y-10'>
      <div className="flex flex-col items-center space-y-6">
        <h4 className="text-2xl font-bold">{`Let's Connect!`}</h4>

        <ul className="flex justify-center space-x-5">
          <li>
            <Link
              href="mailto:parity_flame_3s@icloud.com"
              passHref
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGoogle className="text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/XanderSelorm/"
              passHref
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.twitter.com/XanderSelorm/"
              passHref
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaTwitterSquare className="text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/XanderSelorm/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaFacebookSquare className="text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/xanderselorm/"
              passHref
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaInstagram className="text-xl" />
            </Link>
          </li>
        </ul>
      </div>

      <Link className="btn btn-solid" href="mailto:parity_flame_3s@icloud.com" passHref target="_blank">
        Get in touch
      </Link>

      <p className="text-sm text-muted-foreground">
        Copyright &copy; {new Date().getFullYear()}, Xander Selorm. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
