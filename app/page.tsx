import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Now } from '@/components/sections/now';
import { Work } from '@/components/sections/work';
import { Stack } from '@/components/sections/stack';
import { Journey } from '@/components/sections/journey';
import { Beyond } from '@/components/sections/beyond';
import { Connect } from '@/components/sections/connect';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Now />
        <Work />
        <Stack />
        <Journey />
        <Beyond />
        <Connect />
      </main>
    </>
  );
}