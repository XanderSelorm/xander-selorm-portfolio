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
  linkText?: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4 py-8 sm:items-start md:px-0">
      <section
        className={`relative h-60 w-full overflow-clip rounded-lg bg-blue text-white`}
      >
        <Image src={props.imgSrc} alt="" layout="fill" objectFit="cover" />
      </section>
      <div className="flex flex-col items-center space-y-4 text-center sm:items-start sm:text-left">
        <p className="text-lg font-thin sm:leading-relaxed">
          {props.stack.toUpperCase()}
        </p>
        <h1 className="text-3xl font-bold">{props.title}</h1>

        <p className="text-lg sm:leading-relaxed">{props.description}</p>

        <div className="flex w-fit flex-wrap text-center text-lg font-semibold hover:text-blue hover:underline">
          {props.link ? (
            <Link href={props.link}>
              <div className="flex cursor-pointer flex-nowrap items-center space-x-2">
                <div>{props.linkText ?? 'See more'}</div> <FiArrowUpRight />
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