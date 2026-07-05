'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { featuredProjects, type Project } from '@/content/projects';

function ProjectRow({
  project,
  index,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  index: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ x: 6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => window.open(project.live || project.repo, '_blank')}
      className="group border-b border-border-subtle py-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 transition-colors hover:border-accent/40 cursor-pointer"
    >
      {/* Name and Index */}
      <div className="flex items-baseline gap-4 md:w-1/3">
        <span className="font-mono text-xs text-text-faint">
          0{index + 1}
        </span>
        <h3 className="font-display text-2xl font-semibold text-text-primary transition-colors group-hover:text-accent">
          {project.name}
        </h3>
      </div>

      {/* Description & Tech */}
      <div className="flex-1 md:max-w-xl">
        <p className="text-base text-text-muted leading-relaxed">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-text-faint">
          {(project.tech ?? []).join(' · ')}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 font-mono text-xs sm:w-28 sm:justify-end shrink-0">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors"
        >
          <Github size={13} />
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors"
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Track mouse coordinates for floating preview
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Spring physics for trailing motion
  const springX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 28 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="work"
      className="section bg-bg-base relative"
    >
      <div className="container-content">
        <SectionHeader
          eyebrow="02 · Selected Projects"
          title="Proof of Work"
          subtitle="A hand-picked selection of applications I've engineered and shipped."
        />

        {/* Featured Projects List */}
        <div className="border-t border-border-subtle">
          {featuredProjects.map((p, index) => (
            <ProjectRow
              key={p.slug}
              project={p}
              index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Floating Project Image Hover Preview */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed top-0 left-0 pointer-events-none z-40 hidden md:block overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated/90 shadow-[0_24px_60px_rgba(0,0,0,0.65)] w-[360px] h-[210px]"
            style={{
              x: springX,
              y: springY,
              translateX: 28,
              translateY: -105,
            }}
          >
            <div className="relative w-full h-full">
              {featuredProjects.map((p, idx) => (
                <motion.div
                  key={p.slug}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="360px"
                      className="object-cover"
                      priority={idx < 2}
                    />
                  ) : (
                    // Sleek gradient fallback with custom info
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900/60 to-fuchsia-900/60 p-4">
                      <span className="font-display text-xl font-bold text-white">{p.name}</span>
                      <span className="font-mono text-[10px] text-white/50 mt-1">Image Pending Upload</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}