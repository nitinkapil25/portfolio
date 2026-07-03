'use client';

import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { Chip } from '@/components/ui/chip';
import { stack } from '@/content/stack';

export function Stack() {
  return (
    <section id="stack" className="section bg-bg-elevated/30">
      <div className="container-content">
        <SectionHeader
          eyebrow="05 · the toolkit"
          title="The decoded matrix"
          subtitle="Three states: shipped daily (decoded), actively learning (decoding), and on the list (queued). Hover any chip for context."
        />

        {/* Legend */}
        <Reveal>
          <div className="mb-12 flex flex-wrap items-center gap-6 font-mono text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Decoded
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-status-warning" />
              Decoding now
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-text-faint" />
              Queued
            </span>
          </div>
        </Reveal>

        <div className="space-y-10">
          {stack.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 0.05}>
              <div>
                <h3 className="eyebrow mb-4">{category.title}</h3>
                <RevealGroup className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <RevealItem key={skill.name}>
                      <Chip
                        label={skill.name}
                        state={skill.state}
                        context={skill.context}
                      />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}