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
      <Hero showMouseAnimation isFullHeight>
        <p className="text-sm font-medium tracking-widest text-primary mono_font uppercase">
          Software Engineer
        </p>

        <h1
          id="my-name"
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] w-full"
        >
          Alexander Selorm Kubi
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Building high-traffic web applications and leading development teams
          for{' '}
          <span className="text-foreground font-semibold">
            {new Date().getFullYear() - 2020}+ years
          </span>
          . Currently working from Ghana, West Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/projects" className="btn btn-solid">
            View my work
          </Link>
          <Link href="/contact" className="btn btn-outlined">
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
          {projectsData.slice(0, 4).map(item => (
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
