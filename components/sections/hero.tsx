'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { TypingCode } from '@/components/ui/typing-code';
import { site } from '@/content/site';

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-32 lg:pt-40"
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(167,139,250,0.08),_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(167,139,250,0.04),_transparent_60%)]"
      />
      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: identity */}
          <motion.div
            initial="hidden"
            animate={reduce ? 'show' : 'show'}
            variants={reduce ? undefined : stagger}
            className="lg:col-span-7"
          >
            <motion.div variants={reduce ? undefined : item} className="eyebrow mb-6">
              <span>Hyderabad · Available for work</span>
            </motion.div>

            <motion.h1
              variants={reduce ? undefined : item}
              className="font-display text-hero font-bold tracking-tight text-text-primary"
            >
              {site.name}
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-6 max-w-2xl text-xl text-text-muted sm:text-2xl"
            >
              {site.tagline}
            </motion.p>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-4 max-w-2xl font-mono text-sm text-text-faint"
            >
              MERN developer · AI-curious · IIT Hyderabad hackathon finalist · CMRTC&apos;27
            </motion.p>

            <motion.div
              variants={reduce ? undefined : item}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm text-bg-base transition-all hover:bg-accent-hover"
              >
                See the work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#journey"
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated px-5 py-2.5 font-mono text-sm text-text-primary transition-all hover:border-accent hover:bg-accent/10"
              >
                Read the journey
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-1 font-mono text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                or say hi <ArrowRight size={14} />
              </a>
            </motion.div>

            <motion.div
              variants={reduce ? undefined : item}
              className="mt-12 flex items-center gap-4"
            >
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-muted transition-colors hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted transition-colors hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={site.socials.email}
                aria-label="Email"
                className="text-text-muted transition-colors hover:text-accent"
              >
                <Mail size={18} />
              </a>
              <span className="ml-2 h-px w-12 bg-border-subtle" aria-hidden />
              <span className="font-mono text-xs text-text-faint">
                v3.0 · last built {site.lastUpdated}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: typing code */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-5"
          >
            <TypingCode />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="container-content mt-16 hidden items-center gap-3 lg:flex"
      >
        <span className="font-mono text-xs text-text-faint">scroll</span>
        <motion.span
          animate={{ scaleX: [0, 1, 0], originX: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block h-px w-16 bg-text-faint"
          aria-hidden
        />
      </motion.div>
    </section>
  );
}