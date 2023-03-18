import Link from 'next/link';

const Hero = () => {
  return (
    <section className=" flex w-full items-center justify-center bg-blue py-14 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center space-y-4 px-4 sm:px-0">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          {'I’m Selorm, a software developer👨🏾‍💻 based in Ghana 🇬🇭'}
        </h1>

        <p className="text-2xl sm:leading-relaxed">
          I implement designs and experiences you tend to have when interacting
          with digital products such as websites, web apps and mobile
          applications. I am currently a software engineer at{' '}
          <Link href={'https://scynett.com/'} target="_blank">
            <a className="text-yellow hover:underline"> Scynett GmbH</a>
          </Link>
          .
        </p>

        {/* <div className="mt-8 flex flex-col space-y-10 text-center">
              <Link href="">
                <button className="btn btn-outlined w-fit">
                  {`Let's get in touch`}
                </button>
              </Link>

              <ul className="flex justify-center space-x-3 sm:justify-start">
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
            </div> */}
      </div>
    </section>
  );
};

export default Hero;
