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

const Works: NextPage = () => {
  return (
    <Layout title="About Me">
      <Hero>
        <div className="relative h-full w-full rounded-lg">
          <div className="h-full w-full overflow-clip rounded-lg bg-[url(/imgs/about-image-pattern.png)] shadow">
            <div className="h-full w-full bg-blue bg-opacity-95 sm:hidden">
              <div className="relative h-full w-full ">
                <Image
                  priority
                  className=" top-0 bg-top"
                  src="/imgs/about-portrait-mask.png"
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col space-y-5 p-8 pt-0 text-start">
                <h4 className="text-4xl font-bold">
                  Alexander
                  <br />
                  Selorm Kubi
                </h4>

                <p className="text-lg text-yellow">
                  Software Developer
                  <br />
                  based in Ghana 🇬🇭
                </p>
              </div>
            </div>

            <div className="hidden h-full w-full flex-nowrap bg-blue bg-opacity-95 sm:flex">
              <div className="flex w-1/2 flex-col justify-center space-y-5 p-8 pr-0 text-start">
                <h4 className="text-5xl font-bold">
                  Alexander
                  <br />
                  Selorm Kubi
                </h4>

                <p className="text-lg text-yellow">
                  Software Developer
                  <br />
                  based in Ghana 🇬🇭
                </p>
              </div>
              <div className="relative h-full w-1/2">
                <Image
                  priority
                  className=" top-0 bg-top"
                  src="/imgs/about-landscape-mask.png"
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <Section className="text-lg">
        {aboutMeData.brief.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Section>

      <Section className="">
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2">
            <div id="experience">
              <h3 className="text- text-bold text-2xl font-medium text-blue md:text-left">
                Work experience 💼
              </h3>
              <div className="space-y-4">
                {aboutMeData.workExperience.map(item => (
                  <div key={item.title}>
                    <p className="py-1 text-left text-lg font-medium text-blue md:text-left">
                      {item.workType}
                    </p>
                    <p className="text-gray py-1 text-left text-lg md:text-left">
                      {item.title}
                    </p>
                    <p className="text-gray py-1 text-left text-sm md:text-left">
                      {item.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div id="education">
              <h3 className="text- text-bold mt-10 text-2xl font-medium text-blue md:text-left">
                Education 🎓
              </h3>
              <div className="space-y-4">
                {aboutMeData.education.map(item => (
                  <div key={item.programme}>
                    <p className="py-1 text-left text-lg font-medium text-blue md:text-left">
                      {item.programme}
                    </p>
                    <p className="text-gray py-1 text-left text-lg md:text-left">
                      {item.schoolName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div id="Courses">
              <h3 className="text- text-bold mt-10 text-2xl font-medium text-blue md:text-left">
                Professional Courses 📄
              </h3>
              <div className="space-y-4">
                {aboutMeData.courses.map((item, index) => (
                  <div key={item.title}>
                    <Link href={item.link ?? ''}>
                      <p className="py-1 text-left text-lg font-medium text-blue md:text-left">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 w-full sm:mt-0 md:w-1/2">
            <div id="Skills">
              <h3 className="text- text-bold text-2xl font-medium text-blue md:text-left">
                Skills 🪄
              </h3>
              <div className="space-y-4">
                {aboutMeData.skills.map((item, index) => (
                  <p key={index}>
                    {item}
                    {index !== aboutMeData.skills.length - 1 && ' | '}
                  </p>
                ))}
              </div>
            </div>
            <div id="Tech">
              <h3 className="text- text-bold mt-10 text-2xl font-medium text-blue md:text-left">
                Tech Stacks 👨🏾‍💻
              </h3>
              <div className="space-y-4">
                {aboutMeData.techStacks.map((item, index) => (
                  <p key={index}>
                    {item}
                    {index !== aboutMeData.skills.length - 1 && ' | '}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Works;
