import Link from 'next/link';
import Image from 'next/image';

interface Props {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

const VolunteerCard = (props: Props) => {
  return (
    <div className="space-y-4">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image src={props.imgSrc} alt="" layout="fill" objectFit="cover" />
      </div>
      <h6 className="text-2xl text-blue">{props.title}</h6>
      <p className="text-base text-gray-text">{props.description}</p>
      {props.link && (
        <div className="text-base text-blue underline">
          <Link href={props.link}>Read more...</Link>
        </div>
      )}
    </div>
  );
};

export default VolunteerCard;
