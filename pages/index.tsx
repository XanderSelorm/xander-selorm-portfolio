import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import VolunteerCard from 'components/volunteerCard';
import WorkCard from 'components/workCard';
import type { NextPage } from 'next';
import projectsData from 'resources/projects-data';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Projects --> */}
      <section
        id="projects"
        className="flex w-full max-w-4xl flex-col items-center py-14"
      >
        <h1 className="mb-14 text-center text-3xl font-bold text-blue sm:text-5xl">
          Featured Projects
        </h1>
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

      {/* <!-- Professional Experiences --> */}
      <section
        id="career"
        className="flex w-full max-w-4xl flex-col items-center py-14"
      >
        <h1 className="mb-14 text-center text-3xl font-bold text-blue sm:text-5xl">
          Professional Experience
        </h1>
        <div className="w-full space-y-10">
          <WorkCard
            imgSrc={
              'https://i.pinimg.com/736x/6e/de/9a/6ede9a835035ba5d9d43c510e63cfb5d--jumpman-logo-famous-logos.jpg'
            }
            title={'This is a work card'}
            responsibilites={'I did something'}
            duration={'4 years'}
            link={null}
          />
        </div>
      </section>

      {/* <!-- Volunteerism --> */}
      <section
        id="community"
        className="flex w-full flex-col items-center py-14"
      >
        <h1 className="mb-14 text-center text-3xl font-bold text-blue sm:text-5xl">
          Volunteerism
        </h1>
        <div className="mx-auto flex max-w-[80%] gap-x-10">
          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Rails Girls - Tamale, Ghana'}
            description={`I volunteered to teach Ruby on Rails in Tamale, the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />

          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Initiate Hub - Hohoe, Ghana'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          />
          {/* 
          <VolunteerCard
            imgSrc={'/imgs/rails-girls-tamale-xander-group.jpg'}
            title={'Lorem, ipsum dolor.'}
            description={`I volunteered to teach Ruby on Rails in Tamale ,the northern region
            of Ghana. Rails girls is a free workshop for women to get interested
            in computer programming . This is achieved by providing a great
            experience on building things and by making technology more
            approachable.`}
            link={''}
          /> */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
