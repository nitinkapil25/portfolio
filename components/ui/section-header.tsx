import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Section header with the "decoding" eyebrow motif — PRD §3.3.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <div className={cn('eyebrow mb-4', align === 'center' && 'justify-center')}>
        {eyebrow}
      </div>
      <h2 className="font-display text-section font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-text-muted',
            align === 'center' && 'mx-auto max-w-prose',
            align === 'left' && 'max-w-prose'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}