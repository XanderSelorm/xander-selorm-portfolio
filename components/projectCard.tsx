import Link from "next/link";
import Image from 'next/image';

interface Props {
    reversed?: boolean;
    imgSrc: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = (props: Props) => {
    return (
      <section className={`bg-blue text-white flex flex-wrap md:flex-nowrap ${props.reversed ? 'flex-row-reverse' : ''} items-center justify-between rounded-lg py-8 px-8 md:py-8 md:px-16 space-x-4`}>
          <div className="order-2 max-w-xl text-center sm:text-left space-y-5">
            <h1 className="text-3xl font-bold sm:text-4xl">
              {props.title}
            </h1>

            <p className="mt-4 sm:leading-relaxed text-lg">
              {props.description}
            </p>

            <div className="flex flex-wrap mt-8 text-center">
              <Link href={props.link}>
                <button className="btn btn-outlined">
                  View Project
                </button>
              </Link>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center w-[300px] h-[300px] relative rounded-full overflow-hidden">
            <Image
              src={props.imgSrc}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
      </section>
    );
}

export default ProjectCard;