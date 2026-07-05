'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { journey } from '@/content/journey';

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to animate vertical line filling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="journey" className="section bg-bg-base">
      <div className="container-content">
        <SectionHeader
          eyebrow="05 · the arc"
          title="Career Journey"
          subtitle="Tracing the arc of my technical evolution — from first steps to full-stack engineering."
        />

        <div className="max-w-3xl" ref={containerRef}>
          {/* Timeline Wrapper Container (with border-l for timeline line) */}
          <div className="relative pl-8 md:pl-12 border-l border-border-subtle/40 ml-4 md:ml-6 space-y-12">
            {/* Scroll progress vertical overlay */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-accent origin-top"
            />

            {journey.map((entry, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative group">
                  {/* Timeline square node dot centered exactly on the border. Rotates to diamond on hover. */}
                  <div className="absolute left-[-38px] md:left-[-54px] top-1.5 w-3 h-3 bg-bg-base border-2 border-border-subtle z-10 transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:rotate-45 shadow-[0_0_8px_rgba(255,255,255,0)] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="cursor-default flex flex-col items-start"
                  >
                    {/* Date / Year Column above header */}
                    <span className="font-mono text-xs text-text-faint tracking-wider mb-1 block font-medium">
                      {entry.date}
                      {entry.endDate && entry.endDate !== entry.date && (
                        <> — {entry.endDate}</>
                      )}
                    </span>
                    
                    {/* Event details column */}
                    <div className="w-full">
                      <h3 className="font-display text-xl font-extrabold text-text-primary group-hover:text-accent transition-colors mb-0.5 tracking-tight">
                        {entry.title}
                      </h3>
                      {entry.org && (
                        <span className="text-xs text-text-muted font-mono mb-3 block">
                          at {entry.org}
                        </span>
                      )}
                      <p className="text-sm text-text-muted leading-relaxed max-w-prose">
                        {entry.description}
                      </p>
                      {entry.link && (
                        <a
                          href={entry.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                        >
                          {entry.link.label}
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 border-l border-accent pl-4 py-1 ml-4 md:ml-6">
              <p className="font-mono text-xs text-text-muted">
                Currently looking for new opportunities and engineering full-stack solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}