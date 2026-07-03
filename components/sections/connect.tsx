'use client';

import { ArrowUpRight, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/content/site';

export function Connect() {
  return (
    <footer id="connect" className="section">
      <div className="container-content">
        <div className="overflow-hidden rounded-card border border-border-subtle bg-bg-elevated">
          <div className="grid grid-cols-1 gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
            {/* CTA */}
            <Reveal>
              <div>
                <div className="eyebrow mb-6">08 · say hi</div>
                <h2 className="font-display text-section font-bold tracking-tight text-text-primary">
                  Want to build something?
                </h2>
                <p className="mt-4 max-w-prose text-lg text-text-muted">
                  Talk shop? Collaborate? Hire me? Just say hi. I read every
                  message — give me a day to reply, life happens.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={site.socials.email}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm text-bg-base transition-all hover:bg-accent-hover"
                  >
                    <Mail size={14} />
                    {site.email}
                  </a>
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-2.5 font-mono text-sm text-text-primary transition-all hover:border-accent hover:bg-accent/10"
                  >
                    <FileDown size={14} />
                    Resume PDF
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Link stack */}
            <Reveal delay={0.1}>
              <div>
                <div className="eyebrow mb-6">elsewhere</div>
                <ul className="space-y-1">
                  <li>
                    <a
                      href={site.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors hover:bg-bg-hover"
                    >
                      <span className="flex items-center gap-3">
                        <Github size={16} className="text-text-muted" />
                        <span className="font-mono text-sm text-text-primary">
                          github.com/nitinkapil25
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors hover:bg-bg-hover"
                    >
                      <span className="flex items-center gap-3">
                        <Linkedin size={16} className="text-text-muted" />
                        <span className="font-mono text-sm text-text-primary">
                          linkedin.com/in/nitin-kapil-313188328
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.socials.email}
                      className="group flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors hover:bg-bg-hover"
                    >
                      <span className="flex items-center gap-3">
                        <Mail size={16} className="text-text-muted" />
                        <span className="font-mono text-sm text-text-primary">
                          {site.email}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume.pdf"
                      className="group flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors hover:bg-bg-hover"
                    >
                      <span className="flex items-center gap-3">
                        <FileDown size={16} className="text-text-muted" />
                        <span className="font-mono text-sm text-text-primary">
                          /resume.pdf
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Bottom strip */}
          <div className="hairline px-8 py-6 sm:px-12">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 font-mono text-xs text-text-faint">
                <span className="status-dot status-dot-active" aria-hidden />
                <span>
                  Built with Next.js · Tailwind · Framer Motion · deployed on Vercel
                </span>
              </div>
              <div className="font-mono text-xs text-text-faint">
                © {new Date().getFullYear()} {site.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}