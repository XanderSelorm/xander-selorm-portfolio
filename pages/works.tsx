import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import VolunteerCard from 'components/volunteerCard';
import WorkCard from 'components/workCard';
import type { NextPage } from 'next';
import projectsData from 'resources/projects-data';

const Works: NextPage = () => {
  return (
    <Layout title="Home">
      <section className=" flex w-full items-center justify-center bg-blue py-14 text-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center space-y-4 px-4 sm:px-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            I implement designs and experiences you tend to have when
            interacting with digital products.
          </h1>
        </div>
      </section>

      {/* <!-- Projects --> */}
      <section id="projects" className="flex w-full max-w-4xl flex-col py-14">
        <h1 className="text-3xl font-bold text-blue">Featured Projects</h1>

        <div className="w-full space-y-10">
          {projectsData.map(item => (
            <ProjectCard
              key={item.url}
              title={item.name}
              description={item.description}
              imgSrc={item.image}
              link={item.url}
              stack={item.stack}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Works;
