import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import type { NextPage } from 'next';
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
            I am a self-motivated and independent Frontend Engineer with
            extensive experience building high-traffic frontend web applications
            and leading development teams. Proven track record of architecting
            scalable solutions and driving technical initiatives. I specialize
            in creating intuitive user interfaces and implementing complex
            features for enterprise applications.
          </p>
        </>
      </Hero>

      {/* <!-- Projects --> */}
      <Section>
        <h1 className="text-3xl font-bold text-blue">Featured Works</h1>

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
