/**
 * Journey / career timeline.
 * Source: Personalized chronology matching Nitin's stack focus (MERN, Next.js, AI).
 */

export interface JourneyEntry {
  date: string;
  endDate?: string;
  title: string;
  org?: string;
  description: string;
  link?: { label: string; href: string };
  status?: 'completed' | 'in-progress';
}

export const journey: JourneyEntry[] = [
  {
    date: '2026 — Present',
    title: 'Full-Stack Developer',
    description: 'Building high-performance MERN and Next.js web applications, integrating smart AI agentic workflows, and engineering scalable backends.',
  },
  {
    date: '2025',
    title: 'Frontend Developer',
    description: 'Focusing on highly interactive user interfaces, modern responsive designs, and solid client-side state management.',
  },
  {
    date: '2024',
    title: 'Learning Journey',
    description: 'Dived deep into programming fundamentals, web development basics, JavaScript, and building initial projects.',
  },
  {
    date: '2023',
    title: 'Joined B.Tech',
    description: 'Started my Bachelor of Technology degree in Computer Science, laying down the groundwork of engineering, algorithms, and data structures.',
  },
];