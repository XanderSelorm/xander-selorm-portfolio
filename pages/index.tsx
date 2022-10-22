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

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Xander Selorm | Portfolio</title>
        <link rel="icon" href="/icons/fav.ico" />
      </Head>

      <Navbar />

      {/* <!-- Hero --> */}
      <section className=" bg-blue text-white h-[80vh] flex items-center justify-center">
        <div className="flex items-center justify-between max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 w-full">
          <div className="order-2 md:order-1 max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              {'Hi there 👋🏽, I’m Selorm'}
            </h1>

            <p className="mt-4 sm:leading-relaxed">
              I implement designs and experiences users tend to have when
              interacting with digital products such as websites, web apps and
              mobile applications. <br />I am currently a Software Engineer at
              Scynett GmbH and a Tech Lead at Kauri Africa.
            </p>

            <div className="flex flex-wrap mt-8 text-center">
              <Link href="">
                <button className="btn btn-outlined">
                  {`Let's get in touch`}
                </button>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 hidden md:flex items-center justify-center w-[300px] h-[300px] relative rounded-full overflow-hidden">
            <Image
              // src="/imgs/avatar-smile.jpeg"
              src="/imgs/hero-image.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* <!-- Professional Experiences --> */}
      <section className="py-14 bg-[#f5f5f5]">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-14 text-blue">
          Professional Experience
        </h1>
        <div className="grid grid-cols-3 gap-x-6 max-w-[80%] mx-auto">
          <WorkCard
            imgSrc={''}
            title={''}
            responsibilites={''}
            duration={''}
            link={null}
          />
        </div>
      </section>

      {/* <!-- Projects --> */}
      <section className="py-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-14 text-blue">
          Featured Projects
        </h1>
        <div className="space-y-10 max-w-[80%] mx-auto">
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

      {/* <!-- Volunteerism --> */}
      <section className="py-14 bg-[#f5f5f5]">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-14 text-blue">
          Volunteerism
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 max-w-[80%] mx-auto">
          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Lorem, ipsum dolor.'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />

          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Lorem, ipsum dolor.'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />

          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Lorem, ipsum dolor.'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
