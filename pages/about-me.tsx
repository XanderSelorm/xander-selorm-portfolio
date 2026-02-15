import Hero from 'components/hero';
import Layout from 'components/Layout';
import Section from 'components/section';
import type { NextPage } from 'next';
import Image from 'next/image';
import aboutMeData from 'resources/about-me-data';
import Link from 'next/link';

const Works: NextPage = () => {
  return (
    <Layout
      title="About Me"
      description="Learn more about Alexander Selorm Kubi — a software engineer from Accra, Ghana with experience building scalable web applications and leading engineering teams."
      canonicalPath="/about-me"
    >
      <Hero showMouseAnimation>
        <div className="relative w-full rounded-lg">
          <div className="w-full overflow-clip rounded-lg shadow">
            <div className="h-full w-full bg-card sm:hidden">
              <div className="relative h-full w-full ">
                <Image
                  priority
                  className=" top-0 bg-top object-cover"
                  src="/imgs/about-portrait-mask-bw.png"
                  alt="Alexander Selorm Kubi — portrait"
                  width={800}
                  height={1000}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="flex flex-col space-y-5 p-8 pt-0 text-start">
                <h4 className="text-4xl font-bold leading-normal">
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

            <div className="hidden w-full flex-nowrap bg-card sm:flex">
              <div className="flex w-1/2 flex-col justify-center space-y-5 p-8 pr-0 text-start">
                <h4 className="text-4xl font-bold leading-normal">
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
                  className=" top-0 bg-top object-cover"
                  src="/imgs/about-landscape-mask-bw.png"
                  alt="Alexander Selorm Kubi — landscape portrait"
                  width={1000}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <Section className="text-base">
        <div className="space-y-8 text-start">
          {aboutMeData.brief.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </Section>

      {/* <Section className="">
        <div className="grid w-full gap-5 md:grid-cols-2">
          <div className="w-full space-y-10 text-start">
            <div id="experience" className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground md:text-left">
                Work experience 💼
              </h3>
              <div className="space-y-8">
                {aboutMeData.workExperience.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative border-l border-border pl-6 pb-1"
                  >
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-lg font-semibold text-foreground text-left">
                      {item.workType}
                    </p>
                    <p className="text-base font-medium text-primary text-left">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 text-left">
                      {item.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full space-y-10 text-start">
            <div id="Skills" className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground md:text-left">
                Skills 🪄
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutMeData.skills.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div id="Tech" className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground md:text-left">
                Tools 👨🏾‍💻
              </h3>
              <div className="">
                <p className="leading-7 text-muted-foreground">
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
              <h3 className="text-2xl font-bold text-foreground md:text-left">
                Education 🎓
              </h3>
              <div className="space-y-4">
                {aboutMeData.education.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <p className="font-semibold text-foreground text-left">
                      {item.schoolName}
                    </p>
                    <p className="text-sm text-muted-foreground text-left">
                      {item.programme}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div id="Courses" className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground md:text-left">
                Professional Courses 📄
              </h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {aboutMeData.certifications.map((item, index) => (
                  <li key={index} className="text-left">
                    <Link
                      href={item.link ?? ''}
                      target="_blank"
                      className="hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section> */}
    </Layout>
  );
};

export default Works;
