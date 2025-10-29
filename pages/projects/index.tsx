import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import SectionWithBgImage from 'components/section-with-bg';
import type { NextPage } from 'next';
import projectsData from 'resources/projects-data';

const Projects: NextPage = () => {
  return (
    <Layout title="My Projects">
      <SectionWithBgImage isFullHeight={false}>
        <h1 id="my-name" className="text-4xl font-extrabold sm:text-5xl text-center w-full jost_font">
          Projects
        </h1>

        <h4 id='job-title' className="text-xl text-center w-full">
          FEATURED WORKS
        </h4>
      </SectionWithBgImage>
      <Section className='space-y-10 pt-0'>
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
      </Section>
    </Layout>
  );
};

export default Projects;
