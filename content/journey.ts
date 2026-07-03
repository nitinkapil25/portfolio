/**
 * Journey / career timeline.
 * Source: Resume + LinkedIn + GitHub repo chronology.
 */

export interface JourneyEntry {
  date: string;
  endDate?: string;
  title: string;
  org: string;
  description: string;
  link?: { label: string; href: string };
  status?: 'completed' | 'in-progress';
}

export const journey: JourneyEntry[] = [
  {
    date: '2023',
    endDate: '2027',
    title: 'B.Tech — Computer Science & Information Technology',
    org: 'CMR Technical Campus, Hyderabad',
    description: 'CGPA 8.1 (current). Foundation years: DSA in Java, MERN stack depth, two flagship projects, one hackathon finals appearance.',
    status: 'in-progress',
  },
  {
    date: 'Oct 2024',
    title: 'HACK4SDG Finalist',
    org: 'IIT Hyderabad · AIESEC',
    description:
      'Built under time pressure with a team. Made it to the finals. Learned more in 48 hours than a month of tutorials.',
    link: {
      label: 'Certificate',
      href: 'https://drive.google.com/file/d/1t359WfjBGLgaGWAqcP1f8u3fa6CKDyPP/view',
    },
    status: 'completed',
  },
  {
    date: '2025',
    title: 'Salesforce Agentforce Specialist',
    org: 'Trailhead',
    description: 'LLM integration certification. Credential ID 7288380.',
    link: { label: 'Credential', href: 'https://trailhead.salesforce.com' },
    status: 'completed',
  },
  {
    date: '2024',
    title: 'Network Security Associate — Virtual Internship',
    org: 'AICTE + EduSkills',
    description: 'Foundations of network security, threat modeling, defensive patterns.',
    status: 'completed',
  },
  {
    date: '2024',
    title: 'Hashgraph Developer Course',
    org: 'The Hashgraph Association',
    description: 'Distributed ledger fundamentals. Different paradigm from traditional blockchains.',
    status: 'completed',
  },
  {
    date: 'mid-2026',
    title: 'DevTrail — v1 → v3',
    org: 'Personal',
    description:
      'Iterated three times. Each version sharper than the last. Currently mid-flight on v3.',
    link: {
      label: 'GitHub',
      href: 'https://github.com/nitinkapil25/devtrail3',
    },
    status: 'in-progress',
  },
];