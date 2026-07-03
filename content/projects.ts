/**
 * Project data.
 * Source: GitHub repos + Resume + DevTrail LinkedIn launch post.
 * Tier S = hero / featured, Tier A = notable, Tier B = archive foundation,
 * Tier C = one-offs / coursework.
 *
 * To add a project: add an entry, set tier, ensure tier is included in the
 * `archiveTiers` list below to surface in the archive grid.
 */

export type ProjectTier = 'S' | 'A' | 'B' | 'C';

export interface Project {
  slug: string;
  name: string;
  repo: string;
  live?: string;
  language: 'TypeScript' | 'JavaScript' | 'Java' | 'Other';
  description: string;
  longDescription?: string;
  tech?: string[];
  features?: { emoji: string; title: string; description: string }[];
  status: 'active' | 'shipped' | 'archived';
  tier: ProjectTier;
  updatedAt: string; // ISO
  era: string; // for archive grouping
  featured?: boolean;
  reverse?: boolean; // alternates card layout on featured
}

export const projects: Project[] = [
  // ---------- TIER S — FEATURED ----------
  {
    slug: 'devtrail',
    name: 'DevTrail',
    repo: 'https://github.com/nitinkapil25/devtrail3',
    live: 'https://devtrail3-bjak.onrender.com/',
    language: 'TypeScript',
    description: 'Track what you learn, not just what you ship.',
    longDescription:
      'A full-stack developer growth tracker with journaling, AI-powered weekly reports, bug-pattern detection, and skill heatmaps. Built because the existing dev tools track what you ship — not what you actually learned along the way.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'OpenRouter',
      'Clerk',
      'TanStack Query',
      'Tailwind',
    ],
    features: [
      {
        emoji: '🧠',
        title: 'Developer Journaling System',
        description: 'Log what you learn, bugs you face, time spent, confidence.',
      },
      {
        emoji: '📈',
        title: 'AI Weekly Reports',
        description: 'Auto-analyzes your last 7 days: wins, struggles, focus areas.',
      },
      {
        emoji: '🐞',
        title: 'Bug Pattern Detector',
        description: 'Spots recurring mistakes and suggests improvements.',
      },
      {
        emoji: '🎯',
        title: 'AI Next-Step Recommendations',
        description: 'Suggests what to learn next based on your history.',
      },
    ],
    status: 'active',
    tier: 'S',
    updatedAt: '2026-06-23',
    era: '2026 Q2 — shipping real things',
    featured: true,
    reverse: false,
  },
  {
    slug: 'notion-clone',
    name: 'Notion (kind of)',
    repo: 'https://github.com/nitinkapil25/Notion-clone',
    live: 'https://notion-clone-qq5t.onrender.com/',
    language: 'TypeScript',
    description: 'Block-based notes, sync-ready for offline-first.',
    longDescription:
      'A modular block-based note editor with dynamic content rendering, full-stack architecture with REST APIs and PostgreSQL persistence. Structured for future offline-first sync support.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Drizzle ORM',
      'Vite',
      'BlockNote',
    ],
    features: [
      {
        emoji: '📝',
        title: 'Block-based editor',
        description: 'Text, headings, lists, code — modular and extensible.',
      },
      {
        emoji: '🔌',
        title: 'Full REST API',
        description: 'Express + Drizzle ORM with PostgreSQL persistence.',
      },
      {
        emoji: '📡',
        title: 'Sync-ready architecture',
        description: 'Structured to support offline-first in v2.',
      },
    ],
    status: 'shipped',
    tier: 'S',
    updatedAt: '2026-05-25',
    era: '2026 Q2 — shipping real things',
    featured: true,
    reverse: true,
  },

  // ---------- TIER A — NOTABLE ----------
  {
    slug: 'task-tracker',
    name: 'task_tracker',
    repo: 'https://github.com/nitinkapil25/task_tracker',
    language: 'JavaScript',
    description: 'A lightweight task tracker — most recent build.',
    status: 'active',
    tier: 'A',
    updatedAt: '2026-06-28',
    era: '2026 Q2 — shipping real things',
  },
  {
    slug: 'live-chat-app',
    name: 'live-chat-app',
    repo: 'https://github.com/nitinkapil25/live-chat-app',
    language: 'TypeScript',
    description: 'Real-time chat — sockets, presence, the works.',
    status: 'shipped',
    tier: 'A',
    updatedAt: '2026-02-25',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'ai-learning-assistant',
    name: 'AI-Learning-Assistant',
    repo: 'https://github.com/nitinkapil25/AI-Learning-Assistant-',
    language: 'TypeScript',
    description: 'AI-powered learning companion — early LLM integration experiment.',
    status: 'shipped',
    tier: 'A',
    updatedAt: '2026-02-24',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'moodify',
    name: 'Moodify',
    repo: 'https://github.com/nitinkapil25/Moodify',
    language: 'JavaScript',
    description: 'Mood-driven playlist / discovery app.',
    status: 'shipped',
    tier: 'A',
    updatedAt: '2026-01-31',
    era: '2026 Q1 — trying things',
  },

  // ---------- TIER B — FOUNDATION ----------
  {
    slug: 'recepiehub',
    name: 'RecepieHub',
    repo: 'https://github.com/nitinkapil25/RecepieHub',
    language: 'JavaScript',
    description: 'Recipe collection app — early CRUD practice.',
    status: 'shipped',
    tier: 'B',
    updatedAt: '2025-10-29',
    era: '2025 — the foundation',
  },
  {
    slug: 'todoapp',
    name: 'TodoApp',
    repo: 'https://github.com/nitinkapil25/TodoApp',
    language: 'JavaScript',
    description: 'A todo app. The classic.',
    status: 'shipped',
    tier: 'B',
    updatedAt: '2025-10-08',
    era: '2025 — the foundation',
  },
  {
    slug: 'github-user-finder',
    name: 'github_user_finder',
    repo: 'https://github.com/nitinkapil25/github_user_finder',
    language: 'JavaScript',
    description: 'GitHub user search — first real API integration.',
    status: 'shipped',
    tier: 'B',
    updatedAt: '2025-09-21',
    era: '2025 — the foundation',
  },
  {
    slug: 'dom-project1',
    name: 'dom-Project1',
    repo: 'https://github.com/nitinkapil25/dom-Project1',
    language: 'JavaScript',
    description: 'DOM event bubbling practice. Where it all started.',
    status: 'archived',
    tier: 'B',
    updatedAt: '2025-08-31',
    era: '2025 — the foundation',
  },

  // ---------- TIER C — ONE-OFFS / COURSEWORK ----------
  {
    slug: 'golf-charity',
    name: 'Golf-Charity-Subscription-Platform',
    repo: 'https://github.com/nitinkapil25/Golf-Charity-Subscription-Platform',
    language: 'TypeScript',
    description: 'Charity subscription platform — assignment build.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-20',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'myraid',
    name: 'Myraid',
    repo: 'https://github.com/nitinkapil25/Myraid',
    language: 'JavaScript',
    description: 'Quick exploration project.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-17',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'ai-journal-system',
    name: 'ai_journal_system',
    repo: 'https://github.com/nitinkapil25/ai_journal_system',
    language: 'JavaScript',
    description: 'AI-driven journal — early DevTrail prototype.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-13',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'rayeva-world-assignment',
    name: 'Rayeva-World-assignment',
    repo: 'https://github.com/nitinkapil25/Rayeva-World-assignment',
    language: 'JavaScript',
    description: 'Rayeva assignment — product categorization module.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-11',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'rayeva-world-module-1',
    name: 'Rayeva-World-module_1',
    repo: 'https://github.com/nitinkapil25/Rayeva-World-module_1',
    language: 'JavaScript',
    description: 'Rayeva module — sustainability tracking.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-07',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'primetrade',
    name: 'primetrade',
    repo: 'https://github.com/nitinkapil25/primetrade',
    language: 'JavaScript',
    description: 'Trading dashboard prototype.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-01',
    era: '2026 Q1 — trying things',
  },
  {
    slug: 'scroll-animation',
    name: 'scroll-animation',
    repo: 'https://github.com/nitinkapil25/scroll-animation',
    language: 'JavaScript',
    description: 'Scroll-driven animation playground.',
    status: 'archived',
    tier: 'C',
    updatedAt: '2026-03-01',
    era: '2026 Q1 — trying things',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/**
 * Tiers included in the archive grid.
 * Edit to hide / surface tiers.
 */
export const archiveTiers: ProjectTier[] = ['A', 'B', 'C'];

export const archiveProjects = projects
  .filter((p) => !p.featured && archiveTiers.includes(p.tier))
  .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

/**
 * Group archive by era for chronological storytelling.
 */
export const archiveByEra = archiveProjects.reduce<Record<string, Project[]>>(
  (acc, p) => {
    if (!acc[p.era]) acc[p.era] = [];
    acc[p.era].push(p);
    return acc;
  },
  {}
);