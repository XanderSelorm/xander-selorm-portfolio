import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

interface Props {
  imgSrc: string;
  title: string;
  responsibilites: string;
  duration: string;
  link: string | null;
}

const WorkCard = (props: Props) => {
  return (
    <div className="grid grid-cols-5 py-8 px-8 md:px-0">
      <div className="relative col-span-1 m-3 flex h-[100px] w-full justify-center overflow-hidden rounded-xl">
        <Image src={props.imgSrc} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="col-span-4 space-y-2">
        <h6 className="text-2xl text-blue">{props.title}</h6>
        <p className="text-base text-gray-text">{props.responsibilites}</p>
        {props.link && (
          <div className="text-base text-blue underline">
            <Link href={props.link}>
              See more... <HiOutlineArrowUpRight />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
