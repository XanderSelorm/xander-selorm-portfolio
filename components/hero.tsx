import { FunctionComponent, ReactNode, useRef } from 'react';
import Section from './section';
import MouseAnimation from './mouse-animation';
import { cn } from 'lib/utils';

interface IProps {
  children: ReactNode;
  showMouseAnimation?: boolean;
  centerText?: boolean;
}

const Hero: FunctionComponent<IProps> = ({ children, showMouseAnimation = false, centerText = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className={cn("relative text-foreground flex flex-col items-start")}
      ref={sectionRef}
    >
      <Section isFullWidth isContentCentered={centerText} className={'!px-0 h-full'}>
        {children}
      </Section>
      {showMouseAnimation ? <MouseAnimation className='cursor-pointer hidden xs:block' />
        : null}
    </Section>
  );
};

export default Hero;
