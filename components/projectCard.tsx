import Link from "next/link";
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

interface Props {
  reversed?: boolean;
  imgSrc: string;
  title: string;
  description: string;
  link: string | null;
  stack: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4 py-8 px-8 md:px-0">
      <section
        className={`relative h-60 overflow-clip  rounded-lg bg-blue text-white`}
      >
        <Image src={props.imgSrc} alt="" layout="fill" objectFit="cover" />
      </section>
      <div className="space-y-4 text-center sm:text-left">
        <p className="text-lg font-thin sm:leading-relaxed">
          {props.stack.toUpperCase()}
        </p>
        <h1 className="text-3xl font-bold">{props.title}</h1>

        <p className="text-lg sm:leading-relaxed">{props.description}</p>

        <div className="flex w-fit flex-wrap text-center text-lg font-semibold hover:text-blue hover:underline">
          {props.link ? (
            <Link href={props.link}>
              <div className="flex flex-nowrap items-center space-x-2">
                <div>Let me see</div> <FiArrowUpRight />
              </div>
            </Link>
          ) : (
            <p className="text-blue">Coming Soon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;