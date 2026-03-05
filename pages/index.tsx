import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getProjects } from 'lib/data-service';
import { IProject } from 'shared/interfaces';

interface Props {
  projects: IProject[];
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <Layout
      title="Home"
      description="Alexander Selorm Kubi — software engineer based in Accra, Ghana. Building high-traffic web applications and leading development teams for 5+ years."
      canonicalPath="/"
    >
      <Hero showMouseAnimation isFullHeight>
        <p className="text-sm font-medium tracking-widest text-primary mono_font">
        // Software Engineer: Alexander Selorm Kubi
        </p>

        <h1
          id="my-name"
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] w-full"
        >
          Build{' '}
          <span className="text-primary">intentionally.</span>
          <span className="blink-cursor text-primary/60 ml-1 flex items-center inline-flex">|</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {new Date().getFullYear() - (2020 + 1)}+ years shipping high-traffic web apps and leading development teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/projects" className="btn btn-solid !rounded-full">
            See my work →
          </Link>
          <Link href="/contact" className="btn btn-outlined !rounded-full">
            Get in touch
          </Link>
        </div>
      </Hero>

      <Section>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold">Featured Works</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.slice(0, 4).map(item => (
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

export default Home;
