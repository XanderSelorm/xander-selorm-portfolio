import Link from 'next/link';
import { ReactNode } from 'react';
import Section from './section';

interface IProps {
  children: ReactNode;
}

const Hero = (props: IProps) => {
  return (
    <Section isFullWidth className="bg-blue pt-7 text-white">
      {props.children}
    </Section>
  );
};

export default Hero;
