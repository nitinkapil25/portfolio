'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { aboutContent } from '@/content/about';

const beliefs = ['Clean Code', 'User Experience', 'Continuous Learning', 'Open Source', 'Innovation'];

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Coding' },
  { value: '15+', label: 'GitHub Repos' },
  { value: '∞', label: 'Coffee Consumed', icon: Coffee },
];

export function About() {
  return (
    <section id="about" className="section bg-bg-base">
      <div className="container-content">
        <SectionHeader
          eyebrow="01 · the human"
          title="Decoding Nitin"
          subtitle="A brief layout of who I am and what drives my work."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline, Bio and Belief Tags */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl md:text-4.5xl font-bold tracking-tight text-text-primary mb-6">
                  Crafting Digital Experiences
                </h2>
              </Reveal>

              <RevealGroup>
                <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-primary/95 font-light">
                  {aboutContent.paragraphs.map((p, i) => (
                    <RevealItem key={i}>
                      <p>{p}</p>
                    </RevealItem>
                  ))}
                </div>
              </RevealGroup>
            </div>

            {/* Belief Tags Section */}
            <div className="mt-8">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-widest text-text-faint/80 block mb-3">
                  I believe in
                </span>
                <div className="flex flex-wrap gap-2">
                  {beliefs.map((belief) => (
                    <div
                      key={belief}
                      className="rounded-lg border border-border-subtle bg-bg-elevated/40 px-3 py-1.5 text-xs font-mono font-medium text-text-muted hover:border-accent/40 hover:text-text-primary transition-all duration-300 cursor-default"
                    >
                      {belief}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Stat Cards Grid */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-text-faint/80 block mb-4">
                By the numbers
              </span>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Reveal key={stat.label} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="border border-border-subtle/80 bg-bg-elevated/10 p-6 rounded-xl flex flex-col justify-between h-32 md:h-36 relative overflow-hidden group cursor-default"
                    >
                      {/* Stat Value */}
                      <span className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300">
                        {stat.value}
                      </span>
                      
                      {/* Stat Label */}
                      <span className="text-[10px] md:text-xs font-mono text-text-muted uppercase tracking-widest leading-normal">
                        {stat.label}
                      </span>

                      {/* Icon overlay for coffee box */}
                      {Icon && (
                        <Icon
                          size={24}
                          className="absolute right-4 bottom-4 text-text-muted/40 group-hover:text-accent/50 transition-colors duration-300"
                        />
                      )}
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}