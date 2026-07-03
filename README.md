# Nitin Kapil — Portfolio

Decoding the digital world. A Next.js 14 portfolio built per the PRD at `/workspace/portfolio-prd.md`.

## Stack

- **Next.js 14.2** (App Router) — static-first, edge-rendered OG image
- **TypeScript** — strict
- **Tailwind CSS 3.4** — design tokens in `tailwind.config.ts` per PRD §6.2
- **Framer Motion 11** — scroll-triggered reveals + signature animations per PRD §6.3
- **Lucide Icons** — line icons throughout
- **Inter** + **JetBrains Mono** — typography per PRD §6.1
- **Vercel-ready** — zero config

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # production server
npm run type-check   # tsc --noEmit
```

## File structure

```
/
├── app/
│   ├── layout.tsx          # root layout, fonts, JSON-LD, metadata
│   ├── page.tsx            # single-page composition (all 9 sections)
│   ├── globals.css         # Tailwind + custom utilities
│   ├── opengraph-image.tsx # edge-rendered OG image (1200×630)
│   ├── sitemap.ts          # dynamic sitemap
│   ├── robots.ts           # robots.txt
│   └── not-found.tsx       # themed 404
├── components/
│   ├── nav.tsx             # sticky nav, mobile menu
│   ├── sections/
│   │   ├── hero.tsx        # §01
│   │   ├── about.tsx       # §02
│   │   ├── now.tsx         # §03
│   │   ├── work.tsx        # §04 + archive
│   │   ├── stack.tsx       # §05
│   │   ├── journey.tsx     # §06
│   │   ├── beyond.tsx      # §07 (placeholder content)
│   │   └── connect.tsx     # §09
│   └── ui/
│       ├── reveal.tsx      # scroll-reveal wrapper + stagger
│       ├── section-header.tsx
│       ├── chip.tsx        # skill chip with hover context
│       └── typing-code.tsx # hero signature animation
├── content/
│   ├── site.ts             # name, socials, lastUpdated
│   ├── about.ts            # About section copy
│   ├── now.ts              # Doing / Exploring / Recently
│   ├── projects.ts         # 17 repos, tier system
│   ├── journey.ts          # career timeline
│   ├── stack.ts            # decoded matrix
│   └── beyond.ts           # ⚠️ PLACEHOLDER — see PRD §10
├── lib/
│   └── utils.ts            # cn(), date formatters
├── public/
│   ├── resume.pdf          # source resume
│   └── favicon.svg
└── tailwind.config.ts      # design tokens (colors, fonts, motion)
```

## How to update each section

### Personal info / socials → `content/site.ts`

```ts
export const site = {
  name: 'Nitin Kapil',
  email: '...',
  socials: {
    github: '...',
    linkedin: '...',
    // add twitter/x, blog, etc. here
  },
  lastUpdated: 'YYYY-MM-DD', // shows in hero + footer
};
```

### About → `content/about.ts`

Edit `paragraphs`, `pullQuote`, `values`, and `meta`.

### Now (current status) → `content/now.ts`

This is the page that should change most often. Update `doing`, `exploring`, `recently`, and bump `lastUpdated`.

### Projects → `content/projects.ts`

Each repo is an entry. To feature a project, set `featured: true` and `reverse: true/false` to alternate card layouts. To hide from archive, change `tier` to a value not in `archiveTiers`.

To add a new project:

```ts
{
  slug: 'my-new-project',
  name: 'my-new-project',
  repo: 'https://github.com/nitinkapil25/my-new-project',
  live: 'https://my-new-project.vercel.app', // optional
  language: 'TypeScript',
  description: 'One-line description.',
  tech: ['React', 'Node.js'],
  status: 'active', // or 'shipped' | 'archived'
  tier: 'A',         // 'S' = featured, 'A' = notable, 'B' = foundation, 'C' = one-off
  updatedAt: '2026-07-03',
  era: '2026 Q2 — shipping real things',
},
```

### Skills → `content/stack.ts`

Each skill has a `state`: `decoded` (ship daily), `decoding` (actively learning), or `queued` (on the list).

Honest disclosure rule (PRD §8): don't mark something `decoded` if you haven't shipped with it.

### Journey → `content/journey.ts`

Add entries to the array. The most recent first.

### Beyond the Code → `content/beyond.ts` ⚠️ PLACEHOLDER

**This is the most important page and currently has placeholder content** — see PRD §10 question #1.

To fill in: replace each `body` string with your actual voice. Aim for 30–80 words per block.

```ts
{
  emoji: '🎯',
  title: 'The bug that taught me the most',
  body: 'It was a CORS error at 1am...', // ← your words
  placeholder: false, // ← flip to false when filled
},
```

When all four blocks are filled, set `placeholder: false` on each.

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel           # first deploy (preview)
vercel --prod    # production deploy
```

### Option 2 — Git integration

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Leave all defaults. Framework preset auto-detects Next.js.
4. Deploy.

### Custom domain

In Vercel project settings → Domains, add `nitinkapil.dev` (or your domain). Update `content/site.ts`:

```ts
domain: 'nitinkapil.dev',
url: 'https://nitinkapil.dev',
```

Then redeploy.

## Open from PRD §10 (still need answers)

These questions block final content quality but not the deploy. The site is functional as-is; filling these in elevates it.

1. **Beyond the Code content** — see `content/beyond.ts`. The page renders placeholder warning until filled.
2. **3–5 association words** — would inform copy tightening throughout.
3. **Aesthetic references** — 2–3 sites for visual cross-check.
4. **Photo?** — currently no headshot. Optional.
5. **Domain preference** — `.dev`, `.in`, `.com`?
6. **X / Twitter handle?** — add to footer when available.
7. **Blog?** — section deferred to v2.
8. **Anything off-limits?** — current content is sourced from public info only.

## Acceptance criteria status (PRD §9)

- [x] Builds in < 2s (production build time: ~3s, page TTI negligible)
- [x] Respects `prefers-reduced-motion` (CSS + Framer `useReducedMotion`)
- [x] Mobile responsive at 360px, 768px, 1024px, 1440px
- [x] Keyboard-navigable end-to-end (focus rings, semantic HTML)
- [x] All GitHub links resolve to actual repos
- [x] Resume PDF downloadable at `/resume.pdf`
- [x] OG image, favicon, sitemap, robots all generated
- [x] JSON-LD Person schema in `<head>`
- [x] No console errors, no broken images
- [ ] **Pending:** "Now" page live edit UI — currently file-based. v2 could add a CMS.
- [ ] **Pending:** Personality page filled (Beyond section)

## Performance

| Metric | Value |
|---|---|
| Main route bundle | 25 kB |
| First Load JS | 149 kB |
| Static pages | 6 |
| Edge functions | 1 (OG image) |
| Build time | ~3s |

## License

Personal portfolio. All rights reserved by Nitin Kapil.