'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { journey } from '@/content/journey';
import { cn } from '@/lib/utils';

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });

  return (
    <section id="journey" className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="06 · the arc"
          title="How I got here"
          subtitle="Not a resume list — the story of how the work evolved."
        />

        <div ref={containerRef} className="relative pl-6 sm:pl-10">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-2 top-2 h-full w-px bg-border-subtle sm:left-4"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="absolute left-2 top-2 h-full w-px origin-top bg-accent sm:left-4"
          />

          <ol className="space-y-12">
            {journey.map((entry, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <li className="relative">
                  {/* Node */}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute -left-[18px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[24px]',
                      entry.status === 'in-progress'
                        ? 'border-accent bg-accent/30'
                        : 'border-accent bg-bg-base'
                    )}
                  />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono text-xs text-text-faint sm:w-32 sm:shrink-0">
                      {entry.date}
                      {entry.endDate && entry.endDate !== entry.date && (
                        <> — {entry.endDate}</>
                      )}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {entry.title}
                      </h3>
                      <div className="font-mono text-xs text-text-muted">
                        {entry.org}
                      </div>
                      <p className="mt-2 max-w-prose text-sm text-text-muted">
                        {entry.description}
                      </p>
                      {entry.link && (
                        <a
                          href={entry.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-accent transition-opacity hover:opacity-80"
                        >
                          {entry.link.label}
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2}>
            <div className="mt-12 border-l-2 border-accent pl-4">
              <p className="font-mono text-sm text-text-muted">
                <span className="text-accent">→</span> Currently mid-flight. Next
                chapter TBD.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}