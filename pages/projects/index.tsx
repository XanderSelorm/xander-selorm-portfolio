import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import SectionWithBgImage from 'components/section-with-bg';
import type { GetStaticProps, NextPage } from 'next';
import { getProjects } from 'lib/data-service';
import { IProject } from 'shared/interfaces';
import Hero from 'components/hero';

interface Props {
  projects: IProject[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Layout
      title="Projects"
      description="A showcase of projects by Alexander Selorm Kubi — web applications, mobile apps, and platforms built with Next.js, React, TypeScript, Flutter, and more."
      canonicalPath="/projects"
    >

      <Hero>
        {/* Label */}
        <p className="text-sm font-medium tracking-widest text-primary mono_font">
          // Projects
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          ... where intention met {' '}
          {/* <br /> */}
          <span className="text-primary">outcome.</span>
        </h1>
      </Hero>
      <Section className=''>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map(item => (
            <ProjectCard
              key={item.url ?? item.id}
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

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return { props: { projects }, revalidate: 30 };
};

export default Projects;
