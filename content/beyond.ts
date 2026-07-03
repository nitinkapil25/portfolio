/**
 * Beyond the Code — the personality page.
 *
 * ⚠️  PLACEHOLDER SECTION — see PRD §10 open question #1.
 * This is the page that makes a stranger remember Nitin, not just respect him.
 * The blocks below are scaffolded — Nitin should replace each one with
 * his actual voice. Aim for 30–80 words per block.
 *
 * Why placeholders? The PRD explicitly says: "any inference here would
 * feel like an AI-generated portfolio." The right move is to ship the
 * structure and let Nitin fill it.
 */

export interface BeyondBlock {
  emoji: string;
  title: string;
  body: string;
  placeholder?: boolean;
}

export const beyondBlocks: BeyondBlock[] = [
  {
    emoji: '🎯',
    title: 'The bug that taught me the most',
    body: '[PLACEHOLDER — Nitin to fill] Tell a specific story: which bug, what you tried, what it revealed about how you think. Even 3–4 sentences. Example shape: "It was a CORS error at 1am. I spent 6 hours reading Stack Overflow before realizing the actual fix was 2 lines. What it taught me: read the actual error, not the symptoms."',
    placeholder: true,
  },
  {
    emoji: '📚',
    title: 'How I learn',
    body: '[PLACEHOLDER — Nitin to fill] Your actual learning process. Videos first? Build-along projects? Documentation deep-dives? What sticks, what doesn\'t. Be specific — "I watch one tutorial then immediately break the project" hits harder than "I learn by doing."',
    placeholder: true,
  },
  {
    emoji: '🎮',
    title: 'Off the keyboard',
    body: '[PLACEHOLDER — Nitin to fill] Hobbies, interests, things you do that aren\'t on the resume. Music, sports, cooking, reading, gaming — anything. Even one line is fine. This is the page most likely to be skipped, and the page most likely to be remembered.',
    placeholder: true,
  },
  {
    emoji: '🧠',
    title: 'Currently obsessed with',
    body: '[PLACEHOLDER — Nitin to fill] A topic, a question, a rabbit hole. Could be technical ("how do agents actually decide what to do next?") or not ("why do people still use email?"). Whatever is genuinely on your mind this month. Refresh this quarterly.',
    placeholder: true,
  },
];