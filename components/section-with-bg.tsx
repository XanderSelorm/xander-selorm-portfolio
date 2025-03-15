import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
import Section from './section';
import Image from 'next/image';
import MouseAnimation from './mouse-animation';
import { cn } from 'lib/utils';

interface IProps {
  children: ReactNode;
  bgImagePath?: string;
  bgAttachment?: 'fixed' | 'scroll';
}

const SectionWithBgImage: FunctionComponent<IProps> = ({ children, bgImagePath, bgAttachment = 'fixed' }) => {
  const imageProp = `url(${bgImagePath})`;
  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className="relative pt-7 text-white h-[100dvh] flex flex-col justify-center items-center text-center"
    >
      {bgImagePath ? <div className={cn(`absolute -z-[5px] h-full w-fill bg-no-repeat bg-cover opacity-10`, bgAttachment === 'fixed' ? 'bg-fixed' : 'bg-scroll')} style={{
        backgroundImage: imageProp,
      }} /> : null}
      <Section isFullWidth className='!px-0 h-full'>
        {children}
      </Section>
    </Section>
  );
};

export default SectionWithBgImage;
