/**
 * Skills / stack — the "decoded matrix".
 * Source: Resume technical skills + GitHub language stats + LinkedIn.
 *
 * Honest disclosure rule (PRD §8): "Decoded" = shipped daily.
 * "Decoding" = actively learning. "Queued" = on the list.
 */

export type SkillState = 'decoded' | 'decoding' | 'queued';

export interface Skill {
  name: string;
  state: SkillState;
  context?: string; // shown on hover, e.g. "Used in 8 repos"
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const stack: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', state: 'decoded', context: 'Primary language' },
      { name: 'Java', state: 'decoded', context: 'DSA + college coursework' },
      { name: 'TypeScript', state: 'decoding', context: 'In active conversion' },
      { name: 'HTML5', state: 'decoded' },
      { name: 'CSS3', state: 'decoded' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', state: 'decoded', context: 'Used in 8 repos' },
      { name: 'Redux', state: 'decoded' },
      { name: 'Tailwind CSS', state: 'decoded' },
      { name: 'Next.js', state: 'decoding' },
      { name: 'Responsive Design', state: 'decoded' },
      { name: 'DOM manipulation', state: 'decoded' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', state: 'decoded' },
      { name: 'Express.js', state: 'decoded' },
      { name: 'REST APIs', state: 'decoded' },
      { name: 'JWT', state: 'decoded' },
      { name: 'OAuth', state: 'decoding' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', state: 'decoded' },
      { name: 'PostgreSQL', state: 'decoded', context: 'DevTrail + Notion-clone' },
      { name: 'Drizzle ORM', state: 'decoded' },
    ],
  },
  {
    title: 'AI / LLM',
    skills: [
      { name: 'LLM integration', state: 'decoded', context: 'OpenRouter in DevTrail' },
      { name: 'Prompt Engineering', state: 'decoded' },
      { name: 'LangChain', state: 'decoding' },
      { name: 'Agentic Workflows', state: 'decoding' },
      { name: 'Agentforce (Salesforce)', state: 'decoded', context: 'Certified' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', state: 'decoded' },
      { name: 'GitHub', state: 'decoded' },
      { name: 'VS Code', state: 'decoded' },
      { name: 'Postman', state: 'decoded' },
      { name: 'Vercel', state: 'decoded' },
      { name: 'Netlify', state: 'decoded' },
      { name: 'Railway', state: 'decoded' },
      { name: 'Docker', state: 'queued' },
    ],
  },
  {
    title: 'Queued',
    skills: [
      { name: 'React Native', state: 'queued' },
      { name: 'Kubernetes', state: 'queued' },
      { name: 'AWS / GCP', state: 'queued' },
      { name: 'GraphQL', state: 'queued' },
      { name: 'System Design', state: 'decoding' },
    ],
  },
];