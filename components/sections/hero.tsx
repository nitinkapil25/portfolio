'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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

const particles = [
  ['12%', '20%', 4], ['23%', '72%', 3], ['36%', '12%', 3], ['48%', '78%', 4],
  ['58%', '26%', 2], ['67%', '88%', 3], ['76%', '15%', 4], ['85%', '60%', 3], ['94%', '30%', 2],
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
    <p className="min-h-[3.4rem] max-w-lg text-base font-medium leading-relaxed text-white/72 sm:min-h-[3.7rem] sm:text-lg lg:text-[1.1rem]">
      {text.slice(0, count)}
      <span className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-cursor-blink bg-violet-400" aria-hidden />
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
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[270px] w-[270px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[90px] sm:h-[340px] sm:w-[340px]" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-[16%] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.13),transparent_68%)] sm:h-[330px] sm:w-[330px]" aria-hidden />

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
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(900);
  const pointerY = useMotionValue(320);
  const glowX = useSpring(pointerX, { stiffness: 360, damping: 32, mass: 0.28 });
  const glowY = useSpring(pointerY, { stiffness: 360, damping: 32, mass: 0.28 });
  const screenGlow = useMotionTemplate`radial-gradient(650px circle at ${glowX}px ${glowY}px, rgba(109, 40, 217, 0.12), rgba(67, 56, 202, 0.04) 38%, transparent 72%)`;

  const handleHeroPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!heroRef.current || reduce) return;
    const bounds = heroRef.current.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      onPointerMove={handleHeroPointerMove}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#050505] pt-20 lg:flex lg:items-center lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_76%_34%,rgba(91,33,182,0.1),transparent_38%),radial-gradient(ellipse_at_8%_85%,rgba(37,99,235,0.05),transparent_34%)]" aria-hidden />
      <motion.div className="pointer-events-none absolute inset-0 -z-[15]" style={{ background: screenGlow }} aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div className="hero-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.035]" aria-hidden />
      <motion.div animate={reduce ? undefined : { x: [0, 45, -20, 0], y: [0, -20, 25, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-700/10 blur-[110px]" aria-hidden />
      <motion.div animate={reduce ? undefined : { x: [0, -35, 15, 0], y: [0, 30, -15, 0] }} transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute right-0 top-16 -z-10 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" aria-hidden />

      {particles.map(([left, top, size], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="pointer-events-none absolute z-0 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.75)]"
          style={{ left, top, width: size, height: size }}
          animate={reduce ? undefined : { opacity: [0.15, 0.8, 0.15], scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: 3.5 + index * 0.35, repeat: Infinity, delay: index * 0.2 }}
          aria-hidden
        />
      ))}

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-5 px-5 pb-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2 lg:px-8 lg:pb-0 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 pt-4 lg:pt-0"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-xs text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:text-[13px]">
            <MapPin size={14} className="text-violet-400" aria-hidden />
            <span>Hyderabad</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Available for Work</span>
          </div>

          <h1 className="font-display text-[clamp(3.6rem,6.5vw,6.25rem)] font-bold leading-[0.88] tracking-[-0.04em] text-white">
            <span className="block">Nitin</span>
            <span className="block">Kapil<span className="text-violet-500">.</span></span>
          </h1>

          <div className="mt-6"><TypingTagline /></div>
          <p className="mt-3 text-sm leading-6 text-white/48">
            MERN Developer <span className="mx-2 text-white/20">•</span> AI Enthusiast <span className="mx-2 text-white/20">•</span> Problem Solver<br />
            <span className="text-white/65">IIT Hyderabad Hackathon Finalist</span>
          </p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.65 }} className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(124,58,237,0.4)]">
              View Projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-5 py-2.5 text-sm font-medium text-white/85 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.06]">
              About Me <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="mt-6 flex items-center gap-2.5">
            {[
              [site.socials.github, 'GitHub', Github],
              [site.socials.linkedin, 'LinkedIn', Linkedin],
              [site.socials.email, 'Email', Mail],
            ].map(([href, label, Icon]) => (
              <a key={label as string} href={href as string} target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label as string} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.035] text-white/55 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-white">
                <Icon size={17} />
              </a>
            ))}
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/28 sm:text-[11px]">
            v1.0 <span className="mx-2">•</span> Last updated {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(site.lastUpdated))}
          </p>
        </motion.div>

        <DeveloperShowcase />
      </div>
    </section>
  );
}
