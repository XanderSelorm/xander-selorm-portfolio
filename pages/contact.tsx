/* eslint-disable jsx-a11y/alt-text */
import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import VolunteerCard from 'components/volunteerCard';
import WorkCard from 'components/workCard';
import type { NextPage } from 'next';
import projectsData from 'resources/projects-data';
import Image from 'next/image';
import aboutMeData from 'resources/about-me-data';
import Link from 'next/link';

const Contact: NextPage = () => {
  return (
    <Layout title="Contact Me">
      <Section
        className="h-[44vh] bg-blue pt-48 text-center text-white"
        isFullWidth
      >
        <div className="flex w-full flex-col items-center space-y-5">
          <h5 className="text-center text-5xl text-white">
            Hey there 👋🏾, I’d love to hear from you
          </h5>
          {/* <p className="text-gray font-regular sm:items-left py-2 text-2xl">
            we can work together, chit chat, grab a coffee ☕️ or eat fufu 🍲
          </p> */}
        </div>
        {/* <div className="mt-16 flex w-full items-center justify-center">
          <a
            href="mailto:derrickamenuve@gmail.com"
            className="font-regular py-2 pr-10 text-3xl text-yellow hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/derrickamenuve/"
            className="font-regular py-2 pr-10 text-3xl text-yellow hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.twitter.com/godsloveady/"
            className="font-regular py-2 pr-10 text-3xl text-yellow hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/godsloveady"
            className="font-regular py-2 pr-10 text-3xl text-yellow hover:underline"
          >
            Instagram
          </a>
        </div> */}
      </Section>
    </Layout>
  );
};

export default Contact;
