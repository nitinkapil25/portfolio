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
          subtitle="A simplified timeline of my education, roles, and major projects."
        />

        <div className="max-w-4xl" ref={containerRef}>
          {/* Timeline Wrapper Container */}
          <div className="relative pl-6 md:pl-8 border-l border-border-subtle/40 ml-4 md:ml-6 space-y-10">
            {/* Scroll progress vertical overlay */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-accent origin-top"
            />

            {journey.map((entry, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative group">
                  {/* Timeline circular node (dot) aligned exactly on the border */}
                  <div className="absolute left-[-31px] md:left-[-39px] top-1 w-3.5 h-3.5 rounded-full border-2 border-border-subtle bg-bg-base z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-accent shadow-[0_0_8px_rgba(167,139,250,0)] group-hover:shadow-[0_0_10px_rgba(167,139,250,0.4)]" />

                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 cursor-default"
                  >
                    {/* Date / Year Column */}
                    <span className="font-mono text-xs text-text-faint md:w-32 md:shrink-0 font-medium">
                      {entry.date}
                      {entry.endDate && entry.endDate !== entry.date && (
                        <> — {entry.endDate}</>
                      )}
                    </span>
                    
                    {/* Event details column */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                          {entry.title}
                        </h3>
                        <span className="text-xs text-text-muted font-mono">
                          at {entry.org}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-prose">
                        {entry.description}
                      </p>
                      {entry.link && (
                        <a
                          href={entry.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2.5 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
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
            <div className="mt-10 border-l border-accent pl-4 py-1 ml-4 md:ml-6">
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