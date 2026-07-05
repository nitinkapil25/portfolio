'use client';

import { motion, useReducedMotion } from 'framer-motion';

export type TechBadgeData = {
  name: string;
  short: string;
  color: string;
  position: string;
  rotation: number;
  float: 'vertical' | 'horizontal' | 'diagonal' | 'rotate';
  duration: number;
};

const floatMotion = {
  vertical: { y: [0, -9, 0, 6, 0] },
  horizontal: { x: [0, 8, 0, -6, 0] },
  diagonal: { x: [0, 6, 0, -4, 0], y: [0, -7, 0, 5, 0] },
  rotate: { rotate: [0, 3, 0, -3, 0] },
};

function BrandMark({ tech }: { tech: TechBadgeData }) {
  if (tech.name === 'React') {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
        <circle cx="16" cy="16" r="2.4" fill="currentColor" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="currentColor" strokeWidth="1.7" transform="rotate(120 16 16)" />
      </svg>
    );
  }

  if (tech.name === 'MongoDB') {
    return (
      <svg viewBox="0 0 24 32" className="h-6 w-5" aria-hidden>
        <path d="M12 1C5 7 3 14 6 21c1.5 3.4 3.7 5.3 6 7 2.3-1.7 4.5-3.6 6-7 3-7-1-14-6-20Z" fill="currentColor" />
        <path d="M12 8v22" stroke="#07130b" strokeWidth="1.2" />
      </svg>
    );
  }

  if (tech.name === 'Figma') {
    return (
      <svg viewBox="0 0 20 30" className="h-6 w-5" aria-hidden>
        <path fill="#F24E1E" d="M0 0h10v10H5a5 5 0 0 1-5-5Z"/><path fill="#FF7262" d="M10 0h5a5 5 0 0 1 0 10h-5Z"/>
        <path fill="#A259FF" d="M0 10h10v10H5a5 5 0 0 1-5-5Z"/><circle fill="#1ABCFE" cx="15" cy="15" r="5"/><path fill="#0ACF83" d="M0 20h10v5a5 5 0 0 1-10 0Z"/>
      </svg>
    );
  }

  if (tech.name === 'Tailwind CSS') {
    return (
      <svg viewBox="0 0 32 20" className="h-5 w-6" aria-hidden>
        <path d="M1 10c4-7 9-7 15-2 3 2 5 2 7-1-1 6-7 8-12 4-4-3-7-2-10 2 1-4 3-7 6-9Z" fill="currentColor" />
      </svg>
    );
  }

  const boxed = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'].includes(tech.name);
  return (
    <span
      aria-hidden
      className={`flex h-6 min-w-6 items-center justify-center font-mono text-[9px] font-black tracking-tighter ${boxed ? 'rounded-[5px] px-1 text-[#050505]' : ''}`}
      style={{ backgroundColor: boxed ? tech.color : 'transparent', color: boxed ? '#050505' : tech.color }}
    >
      {tech.short}
    </span>
  );
}

export function TechBadge({ tech, index, active }: { tech: TechBadgeData; index: number; active: boolean }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`absolute z-10 ${tech.position}`}
      initial={{ opacity: 0, scale: 0, y: 40, rotate: tech.rotation - 8 }}
      animate={active ? { opacity: 1, scale: 1, y: 0, rotate: tech.rotation } : undefined}
      transition={{ type: 'spring', stiffness: 210, damping: 18, delay: index * 0.1 }}
    >
      <motion.div
        animate={active && !reduce ? floatMotion[tech.float] : undefined}
        transition={{ duration: tech.duration, repeat: Infinity, ease: 'easeInOut', delay: index * 0.14 }}
        whileHover={reduce ? undefined : { scale: 1.1, rotate: 0 }}
        className="group relative flex cursor-pointer items-center gap-1.5 rounded-xl border border-border-subtle bg-bg-elevated/80 px-2.5 py-1.5 text-text-primary shadow-[0_10px_25px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/40"
        style={{ color: tech.color } as React.CSSProperties}
        role="img"
        aria-label={tech.name}
        tabIndex={0}
      >
        {/* Ambient Neon Backlight Glow on hover */}
        <div
          className="absolute inset-0 -z-10 rounded-xl filter blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-35"
          style={{ backgroundColor: tech.color }}
        />

        <BrandMark tech={tech} />
        <span className="hidden whitespace-nowrap text-[10px] font-medium text-text-muted group-hover:text-text-primary transition-colors sm:block lg:text-[11px]">{tech.name}</span>
      </motion.div>
    </motion.div>
  );
}
