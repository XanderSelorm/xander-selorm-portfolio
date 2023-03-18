import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="h-auto w-full bg-blue py-5 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="my-8 flex w-full flex-col items-center space-y-8">
          <div className="flex flex-1 flex-col space-y-5 text-center sm:text-start">
            <h4 className="text-center text-3xl">{`Let's Connect`}</h4>

            <ul className="flex justify-center space-x-3">
              <li className="cursor-pointer">
                <Link href="mailto:xanderselorm@gmail.com">
                  <FaGoogle className="rounded-lg text-2xl" />
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.linkedin.com/in/XanderSelorm/"
                  target="_blank"
                >
                  <FaLinkedin className="rounded-lg text-2xl" />
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.twitter.com/XanderSelorm/"
                  target="_blank"
                >
                  <FaTwitterSquare className="rounded-lg text-2xl" />
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.facebook.com/XanderSelorm/"
                  target="_blank"
                >
                  <FaFacebookSquare className="rounded-lg text-2xl" />
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="https://www.instagram.com/xanderselorm/"
                  target="_blank"
                >
                  <FaInstagram className="rounded-lg text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="mailto:xanderselorm@gmail.com">
              <a className="btn btn-solid">{`Get in touch`}</a>
            </Link>
          </div>

          <a>
            Copyright &copy; {new Date().getFullYear()}, Xander Selorm. All
            rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
