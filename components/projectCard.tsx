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
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-muted">
        <Image
          src={props.imgSrc}
          alt={props.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-3">
        <p className="text-xs font-medium tracking-wider text-primary mono_font uppercase">
          {props.stack}
        </p>
        <h3 className="text-lg font-bold leading-snug">{props.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {props.description}
        </p>
        <div className="pt-2">
          {props.link ? (
            <Link
              href={props.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              {props.linkText ?? 'View project'} <FiArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">Coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
