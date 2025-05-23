import { cn } from 'lib/utils';
import Link from 'next/link';
import { ReactNode, RefObject } from 'react';

interface IProps {
  children: ReactNode;
  isFullWidth?: boolean;
  hasInnerContainerWidth?: boolean;
  innerContainerWidth?: number;
  isContentCentered?: boolean;
  className?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

const Section = ({
  children,
  innerContainerWidth,
  hasInnerContainerWidth = true,
  className = '',
  isFullWidth = false,
  isContentCentered = false,
  ref,
}: IProps) => {
  return (
    <section
      ref={ref}
      className={cn(`flex h-auto flex-col items-center py-14 px-4`, !isFullWidth ? 'w-full max-w-4xl' : 'w-full', className)}
    >
      <div
        className={cn(`mx-auto flex flex-col items-center space-y-4 text-center `, !isContentCentered && 'md:items-start md:text-start', hasInnerContainerWidth && !innerContainerWidth
          ? 'w-full max-w-4xl px-4 '
          : innerContainerWidth ?? 'w-full')}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
