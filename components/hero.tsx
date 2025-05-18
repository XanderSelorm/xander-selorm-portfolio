import { FunctionComponent, ReactNode, useRef } from 'react';
import Section from './section';
import MouseAnimation from './mouse-animation';
import { cn } from 'lib/utils';

interface IProps {
  children: ReactNode;
  showMouseAnimation?: boolean;
  isFullHeight?: boolean;
  centerText?: boolean;
}

const Hero: FunctionComponent<IProps> = ({ children, showMouseAnimation = false, isFullHeight = true, centerText = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className={cn("relative text-white flex flex-col md:justify-center items-center text-center", isFullHeight ? 'h-[100dvh] ' : 'h-fit')}
      ref={sectionRef}
    >
      <div className="absolute -z-10 h-fill w-fill bg-[url(/imgs/wooden-table.jpg)] bg-no-repeat bg-cover bg-fixed opacity-10" />
      <Section isFullWidth isContentCentered={centerText} className={'!px-0 h-full'}>
        {children}
      </Section>
      {showMouseAnimation ? <MouseAnimation className='cursor-pointer hidden xs:block' />
        : null}
    </Section>
  );
};

export default Hero;
