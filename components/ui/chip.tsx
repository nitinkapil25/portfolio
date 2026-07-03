'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { SkillState } from '@/content/stack';

interface ChipProps {
  label: string;
  state?: SkillState;
  context?: string;
  className?: string;
}

const stateClasses: Record<SkillState, string> = {
  decoded: 'chip-decoded',
  decoding: 'chip-decoding',
  queued: 'chip-queued',
};

const stateFill: Record<SkillState, string> = {
  decoded: 'bg-accent',
  decoding: 'bg-status-warning',
  queued: 'bg-text-faint',
};

/**
 * Skill chip with hover-revealed context (PRD §05).
 */
export function Chip({ label, state = 'decoded', context, className }: ChipProps) {
  return (
    <motion.span
      whileHover={{ y: -1 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn('chip group relative cursor-default', stateClasses[state], className)}
      title={context}
    >
      <span
        className={cn(
          'inline-block h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125',
          stateFill[state]
        )}
        aria-hidden
      />
      {label}
      {context && (
        <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border-subtle bg-bg-elevated px-2 py-1 font-sans text-xs text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {context}
        </span>
      )}
    </motion.span>
  );
}