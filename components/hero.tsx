import { FunctionComponent, ReactNode } from 'react';
import Section from './section';
import MouseAnimation from './mouse-animation';
import { cn } from 'lib/utils';

interface IProps {
  children: ReactNode;
  showMouseAnimation?: boolean;
  isFullHeight?: boolean;
}

const Hero: FunctionComponent<IProps> = ({ children, showMouseAnimation = false, isFullHeight = true }) => {
  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className={cn("relative text-white flex flex-col justify-center items-center text-center", isFullHeight ? 'h-[100dvh] ' : 'h-fit')}
    >
      <div className="absolute -z-10 h-full w-fill bg-[url(/imgs/wooden-table.jpg)] bg-no-repeat bg-cover bg-fixed opacity-10" />
      <Section isFullWidth className='!px-0 h-full'>
        {children}
      </Section>
      {showMouseAnimation ? <div className=''><MouseAnimation /></div>
        : null}
    </Section>
  );
};

export default Hero;
