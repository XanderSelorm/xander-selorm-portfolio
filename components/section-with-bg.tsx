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
  isFullHeight?: boolean;
}

const SectionWithBgImage: FunctionComponent<IProps> = ({ children, bgImagePath, bgAttachment = 'fixed', isFullHeight = true }) => {
  const imageProp = `url(${bgImagePath})`;
  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className={cn("relative text-white flex flex-col justify-center items-center text-center", isFullHeight ? 'h-[100dvh] ' : 'h-fit')}
    >
      {bgImagePath ? <div className={cn(`absolute -z-10 h-fill w-fill bg-no-repeat bg-cover opacity-10`, bgAttachment === 'fixed' ? 'bg-fixed' : 'bg-scroll')} style={{
        backgroundImage: imageProp,
      }} /> : null}
      <Section isFullWidth className='!px-0 h-full'>
        {children}
      </Section>
    </Section>
  );
};

export default SectionWithBgImage;
