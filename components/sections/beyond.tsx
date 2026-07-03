'use client';

import { AlertCircle } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { beyondBlocks } from '@/content/beyond';
import { cn } from '@/lib/utils';

export function Beyond() {
  const hasPlaceholders = beyondBlocks.some((b) => b.placeholder);

  return (
    <section id="beyond" className="section bg-bg-elevated/30">
      <div className="container-content">
        <SectionHeader
          eyebrow="07 · off the keyboard"
          title="Beyond the code"
          subtitle="The page most likely to be skipped. The page most likely to be remembered."
        />

        {hasPlaceholders && (
          <Reveal>
            <div className="mb-12 flex items-start gap-3 rounded-card border border-status-warning/40 bg-status-warning/5 p-4">
              <AlertCircle
                size={16}
                className="mt-0.5 shrink-0 text-status-warning"
                aria-hidden
              />
              <div className="font-mono text-xs text-text-muted">
                <strong className="text-status-warning">
                  PLACEHOLDER CONTENT
                </strong>{' '}
                — These blocks are scaffolded. Per PRD §10, this section needs
                Nitin&apos;s actual voice to land. Replace each block in{' '}
                <code className="rounded bg-bg-hover px-1.5 py-0.5 text-text-primary">
                  content/beyond.ts
                </code>
                .
              </div>
            </div>
          </Reveal>
        )}

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {beyondBlocks.map((block, i) => (
            <RevealItem key={i}>
              <article
                className={cn(
                  'group h-full rounded-card border border-border-subtle bg-bg-elevated p-6 transition-all hover:border-accent/40 sm:p-8',
                  block.placeholder && 'opacity-90'
                )}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span aria-hidden className="text-2xl">
                    {block.emoji}
                  </span>
                  {block.placeholder && (
                    <span className="font-mono text-xs uppercase tracking-widest text-status-warning">
                      placeholder
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-text-primary">
                  {block.title}
                </h3>
                <p
                  className={cn(
                    'mt-3 text-base leading-relaxed',
                    block.placeholder
                      ? 'font-mono text-sm italic text-text-faint'
                      : 'text-text-muted'
                  )}
                >
                  {block.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Visual flourish — decorative, only on this page */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center font-mono text-xs text-text-faint">
            <span className="inline-block h-1 w-1 animate-pulse-dot rounded-full bg-accent" />{' '}
            end of decoder · port 7 / 9
          </div>
        </Reveal>
      </div>
    </section>
  );
}