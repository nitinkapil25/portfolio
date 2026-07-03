'use client';

import { RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { nowContent } from '@/content/now';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

export function Now() {
  return (
    <section id="now" className="section bg-bg-elevated/30">
      <div className="container-content">
        <SectionHeader
          eyebrow="02 · current state"
          title="What I'm decoding right now"
          subtitle={nowContent.intro}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Doing */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="status-dot status-dot-active" aria-hidden />
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Doing
              </h3>
            </div>
            <RevealGroup className="space-y-3">
              {nowContent.doing.map((item, i) => (
                <RevealItem key={i}>
                  <div className="rounded-card border border-border-subtle bg-bg-elevated p-4 transition-all hover:border-accent/40">
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          'mt-1.5 h-2 w-2 shrink-0 rounded-full',
                          item.status === 'active' && 'bg-status-success',
                          item.status === 'paused' && 'bg-status-warning',
                          item.status === 'queued' && 'bg-status-queued'
                        )}
                        aria-hidden
                      />
                      <div>
                        <h4 className="font-display text-base font-medium text-text-primary">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-sm text-text-muted">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Exploring */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="status-dot status-dot-paused" aria-hidden />
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Exploring
              </h3>
            </div>
            <RevealGroup className="flex flex-wrap gap-2">
              {nowContent.exploring.map((item, i) => (
                <RevealItem key={i}>
                  <span className="chip chip-decoding">
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        item.status === 'active' && 'bg-status-warning animate-pulse-dot',
                        item.status === 'paused' && 'bg-status-warning/50',
                        item.status === 'queued' && 'bg-status-queued'
                      )}
                      aria-hidden
                    />
                    {item.label}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Recently */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-2">
                <Calendar size={14} className="text-text-muted" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Recently
                </h3>
              </div>
              <RevealGroup className="space-y-3">
                {nowContent.recently.map((item, i) => (
                  <RevealItem key={i}>
                    <div className="rounded-card border border-border-subtle bg-bg-elevated/50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-display text-sm font-medium text-text-primary">
                            {item.label}
                          </h4>
                          <p className="mt-1 text-xs text-text-muted">{item.detail}</p>
                        </div>
                        <span className="shrink-0 font-mono text-xs text-text-faint">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>

        {/* Last updated */}
        <div className="mt-12 flex items-center justify-center gap-2 font-mono text-xs text-text-faint">
          <span className="status-dot status-dot-active" aria-hidden />
          Last updated {nowContent.lastUpdated}
        </div>
      </div>
    </section>
  );
}