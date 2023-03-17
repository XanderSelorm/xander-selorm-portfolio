import Link from "next/link";
import Image from 'next/image';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

interface Props {
  reversed?: boolean;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4 py-8 px-8 md:px-0">
      <section className={`h-60 rounded-lg bg-blue text-white`}></section>
      <div className="max-w-xl space-y-5 text-center sm:text-left">
        <p className="mt-4 text-lg sm:leading-relaxed">BRIEF</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{props.title}</h1>

        <p className="mt-4 text-lg sm:leading-relaxed">{props.description}</p>

        <div className="mt-8 flex flex-wrap text-center">
          <Link href={props.link}>
            <div className="flex flex-nowrap items-center space-x-4">
              <div>Let me see</div> <HiOutlineArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;