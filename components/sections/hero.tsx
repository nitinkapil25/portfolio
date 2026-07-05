'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { TechBadge, type TechBadgeData } from '@/components/ui/tech-badge';
import { TypingCode } from '@/components/ui/typing-code';
import { site } from '@/content/site';

const technologies: TechBadgeData[] = [
  { name: 'Next.js', short: 'N', color: '#ffffff', position: 'left-[18%] top-[6%]', rotation: -5, float: 'vertical', duration: 5.4 },
  { name: 'JavaScript', short: 'JS', color: '#f7df1e', position: 'right-[5%] top-[1%]', rotation: 6, float: 'rotate', duration: 6.1 },
  { name: 'React', short: 'Re', color: '#61dafb', position: 'left-[34%] top-[20%]', rotation: 3, float: 'vertical', duration: 4.7 },
  { name: 'Node.js', short: 'Node', color: '#83cd29', position: 'right-[1%] top-[27%]', rotation: 5, float: 'horizontal', duration: 5.7 },
  { name: 'Figma', short: 'Fi', color: '#a259ff', position: 'left-[18%] top-[25%]', rotation: -5, float: 'diagonal', duration: 6.3 },
  { name: 'TypeScript', short: 'TS', color: '#3178c6', position: 'right-[-15%] top-[4%]', rotation: -3, float: 'vertical', duration: 5.1 },
  { name: 'Tailwind CSS', short: 'Tw', color: '#38bdf8', position: 'left-[27%] top-[40%]', rotation: 2, float: 'diagonal', duration: 5.9 },
  { name: 'Git', short: 'Git', color: '#f05032', position: 'left-[2%] top-[40%]', rotation: 6, float: 'rotate', duration: 6.6 },
  { name: 'MongoDB', short: 'M', color: '#20c764', position: 'right-[3%] top-[61%]', rotation: -4, float: 'vertical', duration: 6.8 },
  { name: 'Express', short: 'Ex', color: '#e9e9ee', position: 'left-[1%] top-[13%]', rotation: -6, float: 'horizontal', duration: 5.6 },
  { name: 'Redux', short: 'Rx', color: '#9b6dff', position: 'right-[-5%] bottom-[78%]', rotation: 5, float: 'diagonal', duration: 6.2 },
  { name: 'HTML5', short: 'H5', color: '#e34f26', position: 'left-[36%] top-[4%]', rotation: 3, float: 'vertical', duration: 5.2 },
  { name: 'CSS3', short: 'C3', color: '#4b8bff', position: 'left-[99%] bottom-[49%]', rotation: -5, float: 'horizontal', duration: 6.5 },
];

function TypingTagline() {
  const text = 'Building fast, scalable web experiences with the MERN stack.';
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setCount((value) => {
        if (value >= text.length) {
          window.clearInterval(timer);
          return value;
        }
        return value + 1;
      });
    }, 34);
    return () => window.clearInterval(timer);
  }, [reduce, text.length]);

  return (
    <p className="min-h-[3.4rem] max-w-lg text-base font-medium leading-relaxed text-text-muted sm:min-h-[3.7rem] sm:text-lg lg:text-[1.1rem]">
      {text.slice(0, count)}
      <span className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-cursor-blink bg-violet-500" aria-hidden />
    </p>
  );
}

function DeveloperShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const visible = useInView(ref, { once: true, amount: 0.25 });
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(45);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 });
  const imageX = useTransform(smoothX, [0, 100], [-8, 8]);
  const imageY = useTransform(smoothY, [0, 100], [-5, 5]);
  const rotateY = useTransform(smoothX, [0, 100], [-2.5, 2.5]);
  const rotateX = useTransform(smoothY, [0, 100], [2, -2]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current || reduce) return;
    const bounds = ref.current.getBoundingClientRect();
    mouseX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    mouseY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative mx-auto h-[470px] w-full max-w-[680px] sm:h-[525px] lg:h-[570px] lg:-translate-x-14 lg:scale-[0.9] lg:transform-gpu xl:-translate-x-16"
    >
      {technologies.map((tech, index) => (
        <TechBadge key={tech.name} tech={tech} index={index} active={visible} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={reduce ? undefined : { x: imageX, y: imageY }}
        className="group absolute left-1/2 top-[9%] z-20 h-[300px] w-[220px] -translate-x-1/2 sm:h-[370px] sm:w-[290px] lg:h-[400px] lg:w-[318px]"
      >
        <motion.div animate={reduce ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative h-full w-full">
          <Image
            src="/nitin-portrait.png"
            alt="Nitin Kapil, MERN developer"
            fill
            sizes="(max-width: 640px) 220px, 318px"
            className="portrait-fade object-contain object-bottom grayscale contrast-[1.04] drop-shadow-[0_18px_35px_rgba(0,0,0,0.65)] transition-[filter] duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={reduce ? undefined : { scale: 1.015 }}
        className="absolute bottom-[4%] left-1/2 z-40 w-[86%] max-w-[420px] -translate-x-1/2 sm:bottom-[2%]"
      >
        <TypingCode />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-bg-base pt-20 lg:flex lg:items-center lg:pt-16"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" aria-hidden />
      <div className="hero-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay" aria-hidden />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-5 px-5 pb-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-2 lg:px-8 lg:pb-0 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 pt-4 lg:pt-0"
        >
          <h1 className="font-display text-[clamp(3.6rem,6.5vw,6.25rem)] font-black leading-[0.88] tracking-[-0.04em] text-text-primary">
            <span className="block">Nitin</span>
            <span className="block">Kapil<span className="text-violet-500">.</span></span>
          </h1>

          <div className="mt-6"><TypingTagline /></div>
          <p className="mt-3 text-sm leading-6 text-text-muted">
            MERN Developer <span className="mx-2 text-text-faint/50">•</span> AI Enthusiast <span className="mx-2 text-text-faint/50">•</span> Problem Solver
          </p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.65 }} className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-neutral-200 hover:shadow-[0_15px_35px_rgba(255,255,255,0.2)]">
              View Projects <ArrowRight size={16} className="text-neutral-950 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text-muted backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5 hover:text-text-primary">
              About Me <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="mt-6 flex items-center gap-2.5">
            {[
              [site.socials.github, 'GitHub', Github],
              [site.socials.linkedin, 'LinkedIn', Linkedin],
              [site.socials.email, 'Email', Mail],
            ].map(([href, label, Icon]) => (
              <a key={label as string} href={href as string} target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label as string} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-text-muted transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent/5 hover:text-accent">
                <Icon size={17} />
              </a>
            ))}
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint sm:text-[11px]">
            v1.0 <span className="mx-2">•</span> Last updated {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(site.lastUpdated))}
          </p>
        </motion.div>

        <DeveloperShowcase />
      </div>
    </section>
  );
}
