import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import SectionWithBgImage from 'components/section-with-bg';
import type { GetStaticProps, NextPage } from 'next';
import { getProjects } from 'lib/data-service';
import { IProject } from 'shared/interfaces';

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
      <SectionWithBgImage isFullHeight={false}>
        <h1 id="my-name" className="text-4xl font-extrabold sm:text-5xl text-center w-full">
          Projects
        </h1>

        <h4 id='job-title' className="text-xl text-center w-full text-muted-foreground">
          FEATURED WORKS
        </h4>
      </SectionWithBgImage>
      <Section className='pt-0'>
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
