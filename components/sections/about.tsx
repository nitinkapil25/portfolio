'use client';

import { Reveal } from '@/components/ui/reveal';
import { RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { aboutContent } from '@/content/about';
import { site } from '@/content/site';

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="01 · the human"
          title="Decoding who I am"
          subtitle="The résumé tells you what I do. This page tells you who I am. Subtly different."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main essay */}
          <div className="lg:col-span-7">
            <RevealGroup>
              <div className="space-y-6 text-lg leading-relaxed text-text-primary/90">
                {aboutContent.paragraphs.map((p, i) => (
                  <RevealItem key={i}>
                    <p>{p}</p>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>

            {/* Pull quote */}
            <Reveal delay={0.2} y={20}>
              <figure className="mt-12 border-l-2 border-accent pl-6">
                <blockquote className="font-display text-2xl font-medium leading-snug text-text-primary sm:text-3xl">
                  &ldquo;{aboutContent.pullQuote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs text-text-muted">
                  — {aboutContent.pullQuote.attribution}
                </figcaption>
              </figure>
            </Reveal>

            {/* Values */}
            <Reveal delay={0.3} y={16}>
              <div className="mt-12">
                <div className="eyebrow mb-6">What I care about right now</div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {aboutContent.values.map((v, i) => (
                    <li
                      key={i}
                      className="rounded-card border border-border-subtle bg-bg-elevated p-4 transition-colors hover:border-accent/40"
                    >
                      <h3 className="font-display text-base font-semibold text-text-primary">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted">{v.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Side meta panel */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <aside className="sticky top-28 rounded-card border border-border-subtle bg-bg-elevated p-6">
                <div className="eyebrow mb-5">at a glance</div>
                <dl className="space-y-4 font-mono text-sm">
                  {[
                    ['Location', aboutContent.meta.location],
                    ['Role', aboutContent.meta.role],
                    ['Cohort', aboutContent.meta.cohort],
                    ['Status', aboutContent.meta.status],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                      <dt className="text-text-faint">{k}</dt>
                      <dd className="text-right text-text-primary">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 border-t border-border-subtle pt-6">
                  <div className="eyebrow mb-3">links</div>
                  <ul className="space-y-2 font-mono text-sm">
                    <li>
                      <a
                        href={site.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-text-muted hover:text-text-primary"
                      >
                        github.com/nitinkapil25 ↗
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-text-muted hover:text-text-primary"
                      >
                        linkedin.com/in/nitin-kapil ↗
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.socials.email}
                        className="link-underline text-text-muted hover:text-text-primary"
                      >
                        {site.email}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-t border-border-subtle pt-6">
                  <div className="eyebrow mb-3">local time</div>
                  <LocalTime />
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

function LocalTime() {
  const [time, setTime] = useState<string>('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ist = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(ist);
    };
    tick();
    const id = setInterval(tick, 30 * 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-baseline gap-2 font-mono text-sm">
      <span className="text-text-primary">{time || '—:—'}</span>
      <span className="text-text-faint">IST · Hyderabad</span>
    </div>
  );
}