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
    <div className="space-y-4 cursor-pointer hover:bg-[#fff] px-5 py-4 rounded-xl transition duration-500">
      <div className="relative rounded-xl overflow-hidden w-full h-[300px]">
        <Image src={props.imgSrc} alt="" layout="fill" objectFit="cover" />
      </div>
      <h6 className="text-2xl text-blue">{props.title}</h6>
      <p className="text-primary-text text-base">{props.description}</p>
      <div className="text-blue text-base underline">
        <Link href={props.link}>Read more...</Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
