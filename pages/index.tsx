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
      <Hero showMouseAnimation centerText>
        <h1 id="my-name" className="text-3xl font-extrabold sm:text-6xl text-center w-full jost_font">
          ALEXANDER SELORM KUBI
          </h1>

        <h4 id='job-title' className="text-lg text-center w-full">
          FRONTEND ENGINEER
        </h4>
        <p>I am a self-motivated and independent Frontend Engineer with
          extensive experience building high-traffic frontend web applications
          and leading development teams. With a proven track record of architecting
          scalable solutions and driving technical initiatives, I have specialized
          in creating intuitive user interfaces and implementing complex
          features for enterprise applications for almost <strong>{new Date().getFullYear() - 2020} years</strong>.</p>
        <p>Currently, I work as a Frontend Engineer from Ghana, West Africa.</p>
      </Hero>

      {/* <!-- Projects --> */}
      <Section>
        <h1 className="text-3xl font-bold">Featured Works</h1>

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
