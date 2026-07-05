import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Stack } from '@/components/sections/stack';
import { Journey } from '@/components/sections/journey';
import { Connect } from '@/components/sections/connect';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Journey />
        <Connect />
      </main>
    </>
  );
}