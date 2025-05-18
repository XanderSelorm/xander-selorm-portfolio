/* eslint-disable jsx-a11y/alt-text */
import Hero from 'components/hero';
import Layout from 'components/Layout';
import Section from 'components/section';
import type { NextPage } from 'next';
import Image from 'next/image';
import aboutMeData from 'resources/about-me-data';
import Link from 'next/link';

const Works: NextPage = () => {
  return (
    <Layout title="About Me">
      <Hero showMouseAnimation>
        <div className="relative w-full rounded-lg">
          <div className="w-full overflow-clip rounded-lg bg-[url(/imgs/about-image-pattern.png)] shadow">
            <div className="h-full w-full bg-primary bg-opacity-95 sm:hidden">
              <div className="relative h-full w-full ">
                <Image
                  priority
                  className=" top-0 bg-top"
                  src="/imgs/about-portrait-mask-bw.png"
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col space-y-5 p-8 pt-0 text-start">
                <h4 className="text-5xl font-bold leading-normal">
                  Alexander
                  <br />
                  Selorm Kubi
                </h4>

                {/* <p className="text-lg text-secondary">
                  Software Developer
                  <br />
                  based in Ghana 🇬🇭
                </p> */}
              </div>
            </div>

            <div className="hidden w-full flex-nowrap bg-primary bg-opacity-95 sm:flex">
              <div className="flex w-1/2 flex-col justify-center space-y-5 p-8 pr-0 text-start">
                <h4 className="text-5xl font-bold leading-normal">
                  Alexander
                  <br />
                  Selorm Kubi
                </h4>

                {/* <p className="text-lg text-secondary">
                  Software Developer
                  <br />
                  based in Ghana 🇬🇭
                </p> */}
              </div>
              <div className="relative h-full w-1/2">
                <Image
                  priority
                  className=" top-0 bg-top"
                  src="/imgs/about-landscape-mask-bw.png"
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
        <div className="space-y-8 text-start">
          {aboutMeData.brief.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </Section>

      <Section className="">
        <div className="grid w-full gap-5 md:grid-cols-2">
          <div className="w-full space-y-10 text-start">
            <div id="experience" className="space-y-4">
              <h3 className="text-2xl font-medium text-primary md:text-left">
                Work experience 💼
              </h3>
              <div className="space-y-4">
                {aboutMeData.workExperience.map(item => (
                  <div key={item.workType}>
                    <p className="py-1 text-left text-lg font-medium text-primary md:text-left">
                      {item.workType}
                    </p>
                    <p className="py-1 text-left text-lg font-light md:text-left">
                      {item.title}
                    </p>
                    <p className="py-1 text-left text-sm md:text-left">
                      {item.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full space-y-10 text-start">
            {/* <div id="Skills" className="space-y-4">
              <h3 className="text-2xl font-medium text-primary md:text-left">
                Skills 🪄
              </h3>
              <div className="space-y-4">
                <p>
                  {aboutMeData.skills.map((item, index) => (
                    <span key={index}>
                      {item}
                      {' || '}
                    </span>
                  ))}
                </p>
              </div>
            </div> */}
            <div id="Tech" className="space-y-4">
              <h3 className="text-2xl font-medium text-primary md:text-left">
                Tools 👨🏾‍💻
              </h3>
              <div className="space-y-4">
                <p className="leading-7">
                  {aboutMeData.tools.map((item, index) => (
                    <span key={index}>
                      {index === aboutMeData.tools.length - 1 && ' and '}
                      {item}
                      {index !== aboutMeData.tools.length - 1 && ', '}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div id="education" className="space-y-4">
              <h3 className="text-2xl font-medium text-primary md:text-left">
                Education 🎓
              </h3>
              <div className="space-y-4">
                {aboutMeData.education.map(item => (
                  <div key={item.programme}>
                    <p className="py-1 text-left text-lg text-primary md:text-left">
                      {item.schoolName}
                    </p>
                    <p className="py-1 text-left text-lg font-light md:text-left">
                      {item.programme}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div id="Courses" className="space-y-4">
              <h3 className="text-2xl font-medium text-primary md:text-left">
                Professional Courses 📄
              </h3>
              <div className="space-y-4">
                {aboutMeData.certifications.map((item, index) => (
                  <div key={item.title}>
                    <Link href={item.link ?? ''}>
                      <p className="py-1 text-left text-lg font-light md:text-left">
                        {item.title}
                      </p>
                    </Link>
                  </div>
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
