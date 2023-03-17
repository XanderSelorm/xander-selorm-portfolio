import Footer from 'components/footer';
import Navbar from 'components/navbar';
import NavigationBar from 'components/navigationBar';
import ProjectCard from 'components/projectCard';
import VolunteerCard from 'components/volunteerCard';
import WorkCard from 'components/workCard';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import {
  FaGoogle,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Xander Selorm | Portfolio</title>
        <link rel="icon" href="/icons/fav.ico" />
      </Head>

      <Navbar />

      {/* <!-- Hero --> */}
      <section className=" flex w-full items-center justify-center bg-blue py-14 text-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center space-y-4 px-4 sm:px-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {'I’m Selorm, a software developer👨🏾‍💻 based in Ghana 🇬🇭'}
          </h1>

          <p className=" text-2xl sm:leading-relaxed">
            I implement designs and experiences you tend to have when
            interacting with digital products such as websites, web apps and
            mobile applications. I am currently a software engineer at{' '}
            <Link href={'https://scynett.com/'} target="_blank" className="">
              <a className=""> Scynett GmbH</a>
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

      {/* <!-- Projects --> */}
      <section
        id="projects"
        className="flex w-full max-w-4xl flex-col items-center py-14"
      >
        <h1 className="mb-14 text-center text-3xl font-bold text-blue sm:text-5xl">
          Featured Projects
        </h1>
        <div className="w-full space-y-10">
          <ProjectCard
            title="Project Name"
            description="I implement designs and experiences users tend to have when
              interacting with digital products such as websites, web apps and
              mobile applications."
            imgSrc="/imgs/hero-image.png"
            link=""
          />
          <ProjectCard
            reversed
            title="Project Name"
            description="I implement designs and experiences users tend to have when
              interacting with digital products such as websites, web apps and
              mobile applications."
            imgSrc="/imgs/hero-image.png"
            link=""
          />
        </div>
      </section>

      {/* <!-- Professional Experiences --> */}
      <section
        id="career"
        className="flex w-full max-w-4xl flex-col items-center py-14"
      >
        <h1 className="mb-14 text-center text-3xl font-bold text-blue sm:text-5xl">
          Professional Experience
        </h1>
        <div className="w-full space-y-10">
          <WorkCard
            imgSrc={
              'https://i.pinimg.com/736x/6e/de/9a/6ede9a835035ba5d9d43c510e63cfb5d--jumpman-logo-famous-logos.jpg'
            }
            title={'This is a work card'}
            responsibilites={'I did something'}
            duration={'4 years'}
            link={null}
          />
        </div>
      </section>

      {/* <!-- Volunteerism --> */}
      <section
        id="community"
        className="flex w-full flex-col items-center py-14"
      >
        <h1 className="mb-14 text-center text-3xl font-bold text-blue sm:text-5xl">
          Volunteerism
        </h1>
        <div className="mx-auto flex max-w-[80%] gap-x-10">
          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Rails Girls - Tamale, Ghana'}
            description={`I volunteered to teach Ruby on Rails in Tamale, the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />

          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Initiate Hub - Hohoe, Ghana'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />
          {/* 
          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Lorem, ipsum dolor.'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          /> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
