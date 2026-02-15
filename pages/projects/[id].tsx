import Hero from 'components/hero';
import Layout from 'components/Layout';
import ProjectCard from 'components/projectCard';
import Section from 'components/section';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getProjects, getProject } from 'lib/data-service';
import { IProject } from 'shared/interfaces';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

interface Props {
  project: IProject;
}
const ProjectDetails: NextPage<Props> = (props: Props) => {
  return (
    <Layout
      title={props.project.name}
      description={props.project.description}
      canonicalPath={`/projects/${props.project.id}`}
    >
      {/* <!-- Hero --> */}
      <Hero>
        <>
          <section
            className={`relative h-60 w-full overflow-clip rounded-lg bg-primary text-white`}
          >
            <Image
              src={props.project.image}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </section>
        </>
      </Hero>

      {/* <!-- Projects --> */}
      <Section>
        <h1 className="text-2xl font-bold">{props.project.name}</h1>

        <div className="w-full space-y-10">
          <p>{props.project.description}</p>
        </div>

        <div className="flex w-fit flex-wrap text-center text-base font-semibold hover:text-primary hover:underline">
          {props.project.url ? (
            <Link href={props.project.url} target="_blank">
              <div className="flex cursor-pointer flex-nowrap items-center space-x-2">
                <div>{props.project.linkText ?? 'See more'}</div>{' '}
                <FiArrowUpRight />
              </div>
            </Link>
          ) : (
              <p className="text-primary">Coming Soon</p>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const projects = await getProjects();
  return {
    paths: projects.map(p => ({ params: { id: p.id } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string;
  const project = await getProject(id);

  if (!project) {
    return { redirect: { destination: '/404', permanent: false } };
  }

  return { props: { project }, revalidate: 30 };
};

export default ProjectDetails;
