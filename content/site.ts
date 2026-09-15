/**
 * Site-wide metadata and constants.
 * Edit these to personalize.
 */

export const site = {
  name: 'Nitin Kapil',
  handle: 'nitinkapil',
  domain: 'nitinkapil.dev',
  url: 'https://nitinkapil.dev', // TODO: update when domain is connected
  title: 'Nitin Kapil — Full Stack Developer (MERN) · AI-curious · Decoding the digital world',
  description:
    'Portfolio of Nitin Kapil — MERN stack developer, IIT Hyderabad hackathon finalist, building smart web apps from Hyderabad. Currently exploring LangChain, agentic workflows, and system design.',
  tagline: 'Decoding the digital world, one stack at a time.',
  email: 'nitinkapil2025@gmail.com',
  location: 'Hyderabad, Telangana',
  pronouns: '', // TODO: [OPEN] add if desired
  // Source: GitHub bio + LinkedIn headline
  socials: {
    github: 'https://github.com/nitinkapil25',
    linkedin: 'https://www.linkedin.com/in/nitin-kapil-313188328/',
    email: 'mailto:nitinkapil2025@gmail.com',
    // TODO: [OPEN] add X/Twitter, blog, etc. when available
  },
  // Last updated — drives the "alive" footer element
  lastUpdated: '2026-09-15',
};

export type Social = keyof typeof site.socials;
