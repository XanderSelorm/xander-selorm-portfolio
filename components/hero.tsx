import Link from 'next/link';
import { ReactNode } from 'react';
import Section from './section';
import Image from 'next/image';
import MouseAnimation from './mouse-animation';

interface IProps {
  children: ReactNode;
}

const Hero = (props: IProps) => {
  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className="relative pt-7 text-white h-[100dvh] flex flex-col justify-center items-center text-center"
    >
      <div className="absolute -z-[5px] h-full w-fill bg-[url(/imgs/wooden-table.jpg)] bg-no-repeat bg-cover bg-fixed opacity-10" />
      <Section isFullWidth className='!px-0 h-full'>
        {props.children}
      </Section>
      <div className=''><MouseAnimation /></div>

    </Section>
  );
};

export default Hero;
