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
    <div className="flex flex-col items-center space-y-4 py-8 sm:items-start md:px-0 w-fill">
      <section
        className="relative h-60 w-full overflow-clip rounded-lg bg-muted"
      >
        <Image src={props.imgSrc} alt="" layout="fill" objectFit="cover" className="hover:scale-[1.02] transition-transform duration-300" />
      </section>
      <div className="flex flex-col items-center space-y-3 text-center sm:items-start sm:text-left">
        <p className="text-xs text-muted-foreground tracking-wider">
          {props.stack.toUpperCase()}
        </p>
        <h1 className="text-2xl font-bold">{props.title}</h1>

        <p className="text-sm text-muted-foreground sm:leading-relaxed">{props.description}</p>

        <div className="flex w-fit flex-wrap text-center text-sm font-semibold hover:text-primary transition-colors">
          {props.link ? (
            <Link href={props.link}>
              <div className="flex cursor-pointer flex-nowrap items-center space-x-1">
                <div>{props.linkText ?? 'See more'}</div> <FiArrowUpRight />
              </div>
            </Link>
          ) : (
              <p className="text-muted-foreground">Coming Soon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;