import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import type { NextPage } from 'next';
import Link from 'next/link';
import projectsData from 'resources/projects-data';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      {/* <!-- Hero --> */}
      <Hero>
        <>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {'I’m Selorm, a software developer👨🏾‍💻 based in Ghana 🇬🇭'}
          </h1>

          <p className="text-2xl sm:leading-relaxed">
            I implement designs and experiences you tend to have when
            interacting with digital products such as websites, web apps and
            mobile applications. I am currently a software engineer at{' '}
            <Link href={'https://scynett.com/'} target="_blank">
              <a className="text-yellow hover:underline"> Scynett GmbH</a>
            </Link>
            .
          </p>
        </>
      </Hero>

      {/* <!-- Projects --> */}
      <Section>
        <h1 className="text-3xl font-bold text-blue">Featured Projects</h1>

        <div className="w-full space-y-10">
          {projectsData.map(item => (
            <ProjectCard
              key={item.url}
              title={item.name}
              description={item.description}
              imgSrc={item.image}
              link={item.page ?? item.url}
              stack={item.stack}
              linkText={item.linkText}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
