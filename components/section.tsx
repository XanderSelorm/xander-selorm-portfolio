import { cn } from 'lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  isFullWidth?: boolean;
  hasInnerContainerWidth?: boolean;
  innerContainerWidth?: number;
  isContentCentered?: boolean;
  className?: string;
}

const Section = ({
  children,
  innerContainerWidth,
  hasInnerContainerWidth = true,
  className = '',
  isFullWidth = false,
  isContentCentered = false,
}: IProps) => {
  return (
    <section
      className={cn(`flex h-auto flex-col items-center py-14 px-4 sm:px-0`, !isFullWidth ? 'w-full max-w-4xl' : 'w-full', className)}
    >
      <div
        className={cn(`mx-auto flex sm:px-0" h-full flex-col items-center justify-center space-y-4 text-center `, !isContentCentered && 'md:items-start md:text-start', hasInnerContainerWidth && !innerContainerWidth
          ? 'w-full max-w-4xl px-4 '
          : innerContainerWidth ?? 'w-full')}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
