import Link from 'next/link';
import { ElementType } from 'react';

interface ChannelPillProps {
  id: string;
  icon: ElementType<{ className?: string }>;
  label: string;
  href: string;
  external?: boolean;
  /** When true the label is visible at rest and collapses when a sibling is active */
  defaultExpanded?: boolean;
  /** ID of whichever channel is currently hovered in the parent row */
  activeId: string | null;
  onHover: (id: string | null) => void;
}

const ChannelPill = ({
  id,
  icon: Icon,
  label,
  href,
  external,
  defaultExpanded = false,
  activeId,
  onHover,
}: ChannelPillProps) => {
  const isSelf   = activeId === id;
  const anyActive = activeId !== null;

  /**
   * Expanded when:
   *  - defaultExpanded pill: no sibling is active, OR this pill is active
   *  - regular pill: this pill is active
   */
  const expanded = defaultExpanded ? (!anyActive || isSelf) : isSelf;

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className={[
        'inline-flex items-center h-11 rounded-2xl overflow-hidden transition-all duration-300',
        defaultExpanded
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40',
      ].join(' ')}
    >
      {/* Icon — always visible, fixed width */}
      <span className="inline-flex items-center justify-center w-11 h-11 shrink-0">
        <Icon className="h-4 w-4" />
      </span>

      {/* Label — expands/collapses via inline style so we can drive it from JS state */}
      <span
        className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300"
        style={{
          maxWidth:     expanded ? '120px' : '0px',
          opacity:      expanded ? 1 : 0,
          paddingRight: expanded ? '1rem' : '0px',
        }}
      >
        {label}
      </span>
    </Link>
  );
};

export default ChannelPill;
