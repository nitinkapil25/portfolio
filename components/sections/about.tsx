'use client';

import { RevealGroup, RevealItem } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';
import { aboutContent } from '@/content/about';

export function About() {
  return (
    <section id="about" className="section bg-bg-base">
      <div className="container-content">
        <SectionHeader
          eyebrow="01 · the human"
          title="Decoding Nitin"
          subtitle="A brief layout of who I am."
        />

        <div className="max-w-3xl">
          <RevealGroup>
            <div className="space-y-6 text-lg leading-relaxed text-text-primary/90 font-light">
              {aboutContent.paragraphs.map((p, i) => (
                <RevealItem key={i}>
                  <p>{p}</p>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}