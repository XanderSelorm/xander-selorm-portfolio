import { FunctionComponent, ReactNode, useEffect, useRef } from 'react';
import Section from './section';
import MouseAnimation from './mouse-animation';
import { cn } from 'lib/utils';

interface IProps {
  children: ReactNode;
  showMouseAnimation?: boolean;
  centerText?: boolean;
  isFullHeight?: boolean;
  className?: string;
}

const Hero: FunctionComponent<IProps> = ({
  children,
  showMouseAnimation = false,
  centerText = false,
  isFullHeight = false,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x1: 0, y1: 0, x2: 0, y2: 0, xg: 0, yg: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      mouse.current = {
        x: (e.clientX - left) / width - 0.5,
        y: (e.clientY - top) / height - 0.5,
      };
    };

    const onMouseLeave = () => {
      mouse.current = { x: 0, y: 0 };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const { x, y } = mouse.current;
      const c = current.current;

      c.x1 = lerp(c.x1, x * 70, 0.4);
      c.y1 = lerp(c.y1, y * 50, 0.4);
      c.x2 = lerp(c.x2, x * -45, 0.3);
      c.y2 = lerp(c.y2, y * -35, 0.3);
      c.xg = lerp(c.xg, x * 12, 0.06);
      c.yg = lerp(c.yg, y * 10, 0.06);

      if (orb1Ref.current)
        orb1Ref.current.style.transform = `translate(${c.x1}px, ${c.y1}px)`;
      if (orb2Ref.current)
        orb2Ref.current.style.transform = `translate(${c.x2}px, ${c.y2}px)`;
      if (gridRef.current)
        gridRef.current.style.backgroundPosition = `${c.xg}px ${c.yg}px`;

      rafId.current = requestAnimationFrame(tick);
    };

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <Section
      isFullWidth
      isContentCentered
      hasInnerContainerWidth={false}
      className={cn(
        'relative text-foreground flex flex-col items-start overflow-hidden',
        isFullHeight && 'min-h-[85vh] justify-center',
        className,
      )}
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div ref={orb1Ref} className="hero-orb hero-orb-1" />
        <div ref={orb2Ref} className="hero-orb hero-orb-2" />
        <div ref={gridRef} className="hero-grid" />
      </div>
      <Section
        isFullWidth
        isContentCentered={centerText}
        className={'!px-0 h-full'}
      >
        {children}
      </Section>
      {showMouseAnimation ? (
        <MouseAnimation className="cursor-pointer hidden xs:block" />
      ) : null}
    </Section>
  );
};

export default Hero;
