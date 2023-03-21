import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import Hero from './hero';

const Footer = () => {
  return (
    <Hero>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="my-8 flex w-full flex-col items-center space-y-8">
          <div className="flex flex-1 flex-col space-y-5 text-center sm:text-start">
            <h4 className="text-center text-3xl">{`Let's Connect`}</h4>

            <ul className="flex justify-center space-x-3">
              <li className="cursor-pointer">
                <Link
                  href="mailto:xanderselorm@gmail.com"
                  passHref
                  target="_blank"
                >
                  <a target="_blank">
                    <FaGoogle className="rounded-lg text-2xl" />
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.linkedin.com/in/XanderSelorm/"
                  passHref
                  target="_blank"
                >
                  <a target="_blank">
                    <FaLinkedin className="rounded-lg text-2xl" />
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.twitter.com/XanderSelorm/"
                  passHref
                  target="_blank"
                >
                  <a target="_blank">
                    <FaTwitterSquare className="rounded-lg text-2xl" />
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.facebook.com/XanderSelorm/"
                  target="_blank"
                >
                  <a target="_blank">
                    <FaFacebookSquare className="rounded-lg text-2xl" />
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.instagram.com/xanderselorm/"
                  passHref
                  target="_blank"
                >
                  <a target="_blank">
                    <FaInstagram className="rounded-lg text-2xl" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="mailto:xanderselorm@gmail.com" passHref target="_blank">
              <a className="btn btn-solid" target="_blank">{`Get in touch`}</a>
            </Link>
          </div>

          <a>
            Copyright &copy; {new Date().getFullYear()}, Xander Selorm. All
            rights reserved.
          </a>
        </div>
      </div>
    </Hero>
  );
};

export default Footer;
