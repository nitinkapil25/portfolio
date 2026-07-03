'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Star, ExternalLink } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import {
  featuredProjects,
  archiveByEra,
  type Project,
} from '@/content/projects';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative grid grid-cols-1 gap-8 rounded-card border border-border-subtle bg-bg-elevated p-6 transition-all hover:border-accent/40 sm:p-8 lg:grid-cols-12 lg:gap-10',
        project.reverse && 'lg:[&>*:first-child]:order-2'
      )}
    >
      {/* Visual / code preview */}
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border-subtle bg-bg-hover">
          {/* Decorative preview */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg-elevated to-bg-base" />
          <div className="absolute inset-0 p-4 font-mono text-xs leading-relaxed">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-status-success/70" aria-hidden />
              <span className="text-text-faint">{project.name.toLowerCase()}/</span>
            </div>
            <div className="space-y-1 text-text-muted">
              <div className="text-accent">▸ {(project.tech ?? []).slice(0, 3).join(' · ')}</div>
              {(project.tech ?? []).slice(3, 6).map((t, i) => (
                <div key={i} className="text-text-faint">
                  ▸ {t}
                </div>
              ))}
              <div className="mt-4 text-text-primary">
                {project.description}
              </div>
            </div>
          </div>

          {/* Hover glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:col-span-7">
        <div className="mb-2 flex items-center gap-2 font-mono text-xs">
          <span
            className={cn(
              'inline-block h-1.5 w-1.5 rounded-full',
              project.status === 'active' && 'bg-status-success animate-pulse-dot',
              project.status === 'shipped' && 'bg-accent',
              project.status === 'archived' && 'bg-status-queued'
            )}
            aria-hidden
          />
          <span className="uppercase tracking-widest text-text-muted">
            {project.status === 'active' && 'Active development'}
            {project.status === 'shipped' && 'Shipped'}
            {project.status === 'archived' && 'Archived'}
          </span>
          <span className="text-text-faint">·</span>
          <span className="text-text-faint">{project.language}</span>
        </div>

        <h3 className="font-display text-project font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent">
          {project.name}
        </h3>

        <p className="mt-3 text-lg text-text-muted">{project.description}</p>

        {project.longDescription && (
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {project.longDescription}
          </p>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <ul className="mt-6 space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span aria-hidden className="shrink-0 text-base">
                  {f.emoji}
                </span>
                <div>
                  <span className="font-medium text-text-primary">{f.title}</span>
                  <span className="text-text-muted"> — {f.description}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Tech chips */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {(project.tech ?? []).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-subtle bg-bg-hover px-2.5 py-0.5 font-mono text-xs text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-text-primary transition-colors hover:text-accent"
          >
            <Github size={14} />
            Code
            <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          {project.live && (
            <>
              <span className="text-text-faint">·</span>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-text-primary transition-colors hover:text-accent"
              >
                <ExternalLink size={14} />
                Live
              </a>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ArchiveRow({ project }: { project: Project }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-1 border-b border-border-subtle py-4 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:gap-6 sm:py-3"
      >
        <span className="font-mono text-sm font-medium text-text-primary transition-colors group-hover:text-accent sm:w-64 sm:shrink-0">
          {project.name}
        </span>
        <span className="hidden text-sm text-text-muted sm:block sm:flex-1">
          {project.description}
        </span>
        <span className="flex items-center gap-4 font-mono text-xs text-text-faint sm:gap-6">
          <span className="hidden w-20 sm:block">{project.language}</span>
          <span className="w-16">{formatDate(project.updatedAt)}</span>
          <ArrowUpRight
            size={14}
            className="text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </span>
      </a>
    </motion.li>
  );
}

export function Work() {
  return (
    <section id="work" className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="03 · proof of work"
          title="What I've shipped"
          subtitle="Two flagship builds above the fold. Everything else, organized by the era I built it in — the story of how the work evolved."
        />

        {/* Featured */}
        <div className="space-y-8 lg:space-y-12">
          {featuredProjects.map((p) => (
            <FeaturedCard key={p.slug} project={p} />
          ))}
        </div>

        {/* Archive */}
        <div className="mt-24">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <div>
                <div className="eyebrow mb-3">04 · the archive</div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  Everything else, by era
                </h3>
              </div>
              <a
                href="https://github.com/nitinkapil25?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1 font-mono text-sm text-text-muted transition-colors hover:text-text-primary sm:inline-flex"
              >
                <Github size={14} />
                All repos
                <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>

          {Object.entries(archiveByEra).map(([era, list]) => (
            <div key={era} className="mb-12 last:mb-0">
              <Reveal>
                <div className="mb-4 flex items-center gap-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    {era}
                  </h4>
                  <span className="h-px flex-1 bg-border-subtle" />
                  <span className="font-mono text-xs text-text-faint">
                    {list.length} {list.length === 1 ? 'repo' : 'repos'}
                  </span>
                </div>
              </Reveal>
              <RevealGroup>
                <ul className="border-t border-border-subtle">
                  {list.map((p) => (
                    <ArchiveRow key={p.slug} project={p} />
                  ))}
                </ul>
              </RevealGroup>
            </div>
          ))}

          <Reveal>
            <a
              href="https://github.com/nitinkapil25?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-text-muted transition-colors hover:text-text-primary sm:hidden"
            >
              <Github size={14} />
              See all repos on GitHub
              <ArrowUpRight size={12} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}