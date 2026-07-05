'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';

// 12 skills distributed evenly in a 360-degree circle (in radians)
const floatingSkills = [
  { name: 'React.js', short: 'Re', color: '#61dafb', angle: (0 * Math.PI) / 6 },
  { name: 'TypeScript', short: 'TS', color: '#3178c6', angle: (1 * Math.PI) / 6 },
  { name: 'Next.js', short: 'N', color: '#ffffff', angle: (2 * Math.PI) / 6 },
  { name: 'Node.js', short: 'Node', color: '#83cd29', angle: (3 * Math.PI) / 6 },
  { name: 'Express', short: 'Ex', color: '#ffffff', angle: (4 * Math.PI) / 6 },
  { name: 'MongoDB', short: 'M', color: '#20c764', angle: (5 * Math.PI) / 6 },
  { name: 'PostgreSQL', short: 'Pg', color: '#336791', angle: (6 * Math.PI) / 6 },
  { name: 'Tailwind CSS', short: 'Tw', color: '#38bdf8', angle: (7 * Math.PI) / 6 },
  { name: 'Redux', short: 'Rx', color: '#764abc', angle: (8 * Math.PI) / 6 },
  { name: 'Docker', short: 'D', color: '#2496ed', angle: (9 * Math.PI) / 6 },
  { name: 'Git', short: 'Git', color: '#f05032', angle: (10 * Math.PI) / 6 },
  { name: 'JavaScript', short: 'JS', color: '#f7df1e', angle: (11 * Math.PI) / 6 },
];

function Eyeball({ mouseX, mouseY, isMobile }: { mouseX: any; mouseY: any; isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);

  // Smooth springs for trailing eyeball movement
  const smoothX = useSpring(pupilX, { stiffness: 220, damping: 18 });
  const smoothY = useSpring(pupilY, { stiffness: 220, damping: 18 });

  useEffect(() => {
    const updatePupil = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const mx = mouseX.get();
      const my = mouseY.get();

      const dx = mx - eyeX;
      const dy = my - eyeY;

      const angle = Math.atan2(dy, dx);
      // Constrain pupil range inside eye outline (smaller movement radius on mobile)
      const maxRadius = isMobile ? 12 : 22;
      const distance = Math.min(maxRadius, Math.sqrt(dx * dx + dy * dy) * 0.08);

      pupilX.set(Math.cos(angle) * distance);
      pupilY.set(Math.sin(angle) * distance);
    };

    const unsubscribeX = mouseX.on('change', updatePupil);
    const unsubscribeY = mouseY.on('change', updatePupil);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, pupilX, pupilY, isMobile]);

  return (
    <div
      ref={ref}
      className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center relative border-[3px] md:border-4 border-neutral-800 shadow-[inset_0_3px_6px_rgba(0,0,0,0.15)] shrink-0"
    >
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-neutral-900 flex flex-col items-center justify-center relative text-[3px] md:text-[6px] text-white font-black tracking-widest text-center select-none p-0.5 md:p-1.5 leading-tight"
      >
        <span>HOVER TO</span>
        <span>REVEAL</span>
        <span>SKILLS</span>
        {/* Eye highlight glint */}
        <div className="absolute top-0.5 right-0.5 md:top-1.5 md:right-1.5 w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-white" />
      </motion.div>
    </div>
  );
}

function FloatingSkillCard({
  skill,
  localX,
  localY,
  isMobile,
}: {
  skill: typeof floatingSkills[0];
  localX: any;
  localY: any;
  isMobile: boolean;
}) {
  const baseRadius = isMobile ? 110 : 230;
  const bulge = isMobile ? 20 : 45;

  // Motion values for the card's visual states, initialized at default base positions
  const cardX = useMotionValue(Math.cos(skill.angle) * baseRadius);
  const cardY = useMotionValue(Math.sin(skill.angle) * baseRadius);
  const opacity = useMotionValue(0.18);
  const scale = useMotionValue(0.8);
  const sharpFactorValue = useMotionValue(0);

  // Springs for smooth physics lag
  const smoothX = useSpring(cardX, { stiffness: 120, damping: 14 });
  const smoothY = useSpring(cardY, { stiffness: 120, damping: 14 });
  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 14 });
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 14 });
  const smoothSharp = useSpring(sharpFactorValue, { stiffness: 120, damping: 14 });

  useEffect(() => {
    const updateCard = () => {
      const lx = localX.get();
      const ly = localY.get();

      // Compute angle of cursor relative to center
      const mouseAngle = Math.atan2(ly, lx);

      // Compute angle difference normalized to [-PI, PI]
      let diff = skill.angle - mouseAngle;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;

      // Similarity factor
      const similarity = Math.max(0, Math.cos(diff));
      const sharpFactor = Math.pow(similarity, 2.8);

      const currentRadius = baseRadius + bulge * sharpFactor;

      cardX.set(Math.cos(skill.angle) * currentRadius);
      cardY.set(Math.sin(skill.angle) * currentRadius);
      opacity.set(0.18 + 0.82 * sharpFactor);
      scale.set(0.8 + 0.35 * sharpFactor);
      sharpFactorValue.set(sharpFactor);
    };

    // Trigger update on initialization to snap instantly to responsive sizes
    updateCard();

    const unsubscribeX = localX.on('change', updateCard);
    const unsubscribeY = localY.on('change', updateCard);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [localX, localY, skill.angle, baseRadius, bulge, cardX, cardY, opacity, scale, sharpFactorValue]);

  // Transform sharpFactor into styling attributes (keeps rendering off the main thread!)
  const borderColor = useTransform(smoothSharp, [0, 0.5, 1], [
    'rgba(255,255,255,0.08)',
    'rgba(255,255,255,0.08)',
    `${skill.color}50`,
  ]);
  const boxShadow = useTransform(smoothSharp, [0, 0.5, 1], [
    '0 0 0px rgba(0,0,0,0)',
    '0 0 0px rgba(0,0,0,0)',
    `0 0 20px ${skill.color}25`,
  ]);
  const glowOpacity = useTransform(smoothSharp, (v) => v * 0.45);
  const glowScale = useTransform(smoothSharp, (v) => 0.9 + v * 0.25);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        opacity: smoothOpacity,
        scale: smoothScale,
      }}
      className="absolute z-20 pointer-events-none"
    >
      {/* Ambient Neon Backlight Glow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl md:rounded-2xl filter blur-md md:blur-xl"
        style={{
          backgroundColor: skill.color,
          opacity: glowOpacity,
          scale: glowScale,
        }}
      />

      {/* Square Card Design */}
      <motion.div
        className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex flex-col justify-center items-center border bg-bg-elevated/95 p-1 md:p-2 shadow-lg backdrop-blur-md transition-colors"
        style={{
          borderColor: borderColor,
          boxShadow: boxShadow,
        }}
      >
        <span
          className="font-display text-xs md:text-xl font-black tracking-tight"
          style={{ color: skill.color }}
        >
          {skill.short}
        </span>
        <span className="text-[5px] md:text-[8px] font-mono font-medium text-text-muted mt-0.5 md:mt-1 uppercase tracking-wider text-center line-clamp-1 w-full">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track global coordinates for eyeballs
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Track local coordinates for skills highlight cone (bypasses React renders)
  const localX = useMotionValue(0);
  const localY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Compute local coords relative to container center
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        localX.set(x);
        localY.set(y);
      }
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      mouseX.set(touch.clientX);
      mouseY.set(touch.clientY);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = touch.clientX - rect.left - rect.width / 2;
        const y = touch.clientY - rect.top - rect.height / 2;
        localX.set(x);
        localY.set(y);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });
    window.addEventListener('touchstart', handleGlobalTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchstart', handleGlobalTouchMove);
    };
  }, [mouseX, mouseY, localX, localY]);

  return (
    <section id="stack" className="section bg-bg-base">
      <div className="container-content">
        <SectionHeader
          eyebrow="04 · the toolkit"
          title="Tech Stack"
          subtitle="A structured overview of the languages, frameworks, databases, and tools I use."
        />

        {/* Interactive Eyeballs trail arena (fully transparent and borderless) */}
        <div
          ref={containerRef}
          className="relative h-[320px] md:h-[540px] w-full max-w-[800px] mx-auto flex items-center justify-center overflow-visible mb-8 group/eyes cursor-default"
        >
          {/* Eyeballs */}
          <div className="flex gap-2 md:gap-4 z-10 relative">
            <Eyeball mouseX={mouseX} mouseY={mouseY} isMobile={isMobile} />
            <Eyeball mouseX={mouseX} mouseY={mouseY} isMobile={isMobile} />
          </div>

          {/* Direction-highlighted tech chips (high-performance rendering) */}
          {floatingSkills.map((skill) => (
            <FloatingSkillCard
              key={skill.name}
              skill={skill}
              localX={localX}
              localY={localY}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}