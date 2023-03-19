import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  isFullWidth?: boolean;
  innerContainerWidth?: number;
  className?: string;
}

const Section = ({
  children,
  innerContainerWidth,
  className = '',
  isFullWidth = false,
}: IProps) => {
  return (
    <section
      className={`flex ${
        !isFullWidth ? 'w-full max-w-4xl' : 'w-full'
      } h-auto flex-col items-center py-14 px-4 sm:px-0 ${className}`}
    >
      <div
        className={`mx-auto flex ${
          !innerContainerWidth
            ? 'w-full max-w-4xl'
            : innerContainerWidth ?? 'w-full'
        } sm:px-0" h-auto flex-col items-center justify-center space-y-4 px-4 text-center md:items-start md:text-start`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
