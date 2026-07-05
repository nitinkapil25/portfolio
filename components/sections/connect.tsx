'use client';

import { ArrowUpRight, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/content/site';

export function Connect() {
  return (
    <footer id="connect" className="section bg-bg-base border-t border-border-subtle">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* CTA */}
          <Reveal>
            <div>
              <div className="eyebrow mb-6">06 · say hi</div>
              <h2 className="font-display text-section font-bold tracking-tight text-text-primary">
                Want to build something?
              </h2>
              <p className="mt-4 max-w-prose text-lg text-text-muted font-light leading-relaxed">
                Collaborate? Freelance hire? Or just talk shop? Drop me an email — I read every message and usually respond within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={site.socials.email}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm text-white hover:bg-accent-hover transition-all"
                >
                  <Mail size={14} />
                  {site.email}
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-2.5 font-mono text-sm text-text-muted hover:border-accent hover:text-text-primary hover:bg-accent/5 transition-all"
                >
                  <FileDown size={14} />
                  Resume PDF
                </a>
              </div>
            </div>
          </Reveal>

          {/* Link stack */}
          <Reveal delay={0.1}>
            <div className="lg:ml-auto w-full max-w-sm">
              <div className="eyebrow mb-6">elsewhere</div>
              <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
                <li>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3.5 transition-colors hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <Github size={16} className="text-text-muted group-hover:text-accent" />
                      <span className="font-mono text-sm text-text-primary group-hover:text-accent">
                        github.com/nitinkapil25
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3.5 transition-colors hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <Linkedin size={16} className="text-text-muted group-hover:text-accent" />
                      <span className="font-mono text-sm text-text-primary group-hover:text-accent">
                        linkedin.com/in/nitin-kapil
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.email}
                    className="group flex items-center justify-between py-3.5 transition-colors hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <Mail size={16} className="text-text-muted group-hover:text-accent" />
                      <span className="font-mono text-sm text-text-primary group-hover:text-accent">
                        {site.email}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 border-t border-border-subtle pt-6">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5 font-mono text-xs text-text-faint">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Next.js · Tailwind · Framer Motion
              </span>
            </div>
            <div className="font-mono text-xs text-text-faint">
              © {new Date().getFullYear()} {site.name}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}