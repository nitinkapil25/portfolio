'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Hero signature moment — PRD §6.3:
 * "Hero: the code snippet types character by character (2s total, variable speed)."
 *
 * Source: actual DevTrail code from Nitin's project (paraphrased for clarity).
 */

type TokenType = 'keyword' | 'string' | 'comment' | 'fn' | 'var' | 'punct' | 'text';

const codeLines: { tokens: { type: TokenType; text: string }[] }[] = [
  {
    tokens: [
      { type: 'keyword', text: 'const' },
      { type: 'var', text: ' nitin' },
      { type: 'punct', text: ' = ' },
      { type: 'punct', text: '{' },
    ],
  },
  {
    tokens: [
      { type: 'text', text: '  stack' },
      { type: 'punct', text: ': ' },
      { type: 'string', text: "'MERN + AI'" },
      { type: 'punct', text: ',' },
    ],
  },
  {
    tokens: [
      { type: 'text', text: '  building' },
      { type: 'punct', text: ': ' },
      { type: 'string', text: "'DevTrail v3'" },
      { type: 'punct', text: ',' },
    ],
  },
  {
    tokens: [
      { type: 'text', text: '  status' },
      { type: 'punct', text: ': ' },
      { type: 'string', text: "'shipping fast'" },
      { type: 'punct', text: ',' },
    ],
  },
  {
    tokens: [
      { type: 'text', text: '  vibe' },
      { type: 'punct', text: ': ' },
      { type: 'string', text: "'decoding the digital world'" },
    ],
  },
  {
    tokens: [
      { type: 'punct', text: '};' },
    ],
  },
];

const tokenColor: Record<string, string> = {
  keyword: 'text-accent',
  var: 'text-status-warning',
  fn: 'text-accent-hover',
  string: 'text-status-success',
  comment: 'text-text-faint italic',
  punct: 'text-text-muted',
  text: 'text-text-primary',
};

function flattenChars(): { ch: string; type: TokenType }[] {
  const chars: { ch: string; type: TokenType }[] = [];
  for (const line of codeLines) {
    for (const tok of line.tokens) {
      for (const ch of tok.text) {
        chars.push({ ch, type: tok.type });
      }
    }
    chars.push({ ch: '\n', type: 'punct' });
  }
  return chars;
}

export function TypingCode() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? flattenChars().length : 0);

  useEffect(() => {
    if (reduce) {
      setCount(flattenChars().length);
      return;
    }
    const total = flattenChars().length;
    let i = 0;
    // variable speed: 18-40ms per char, with line breaks slightly slower
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < total) {
        const ch = flattenChars()[i - 1];
        const delay = ch.ch === '\n' ? 120 : 18 + Math.random() * 22;
        setTimeout(tick, delay);
      }
    };
    const start = setTimeout(tick, 600);
    return () => clearTimeout(start);
  }, [reduce]);

  const chars = flattenChars();
  const visible = chars.slice(0, count);

  // Group by line for display
  const rendered: { ch: string; type: string }[][] = [[]];
  for (const c of visible) {
    if (c.ch === '\n') {
      rendered.push([]);
    } else {
      rendered[rendered.length - 1].push(c);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-card border border-border-subtle bg-bg-elevated font-mono text-sm shadow-2xl shadow-black/40">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-hover/50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
        <span className="ml-3 font-mono text-xs text-text-faint">
          ~/nitin/build.js
        </span>
      </div>

      {/* Code body */}
      <div className="min-h-[260px] p-6">
        <pre className="leading-relaxed">
          {rendered.map((line, li) => (
            <div key={li} className="flex">
              <span className="mr-4 inline-block w-6 select-none text-right font-mono text-xs text-text-faint">
                {li + 1}
              </span>
              <span>
                {line.map((c, ci) => (
                  <span key={ci} className={tokenColor[c.type]}>
                    {c.ch}
                  </span>
                ))}
                {li === rendered.length - 1 && count < chars.length && (
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      times: [0, 0.49, 0.5, 1],
                      ease: 'linear',
                    }}
                    className="ml-0.5 inline-block h-4 w-2 -mb-0.5 bg-accent align-middle"
                    aria-hidden
                  />
                )}
              </span>
            </div>
          ))}
          {count >= chars.length && (
            <div className="flex">
              <span className="mr-4 inline-block w-6 select-none text-right font-mono text-xs text-text-faint">
                {rendered.length + 1}
              </span>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  times: [0, 0.49, 0.5, 1],
                  ease: 'linear',
                }}
                className="inline-block h-4 w-2 bg-accent"
                aria-hidden
              />
            </div>
          )}
        </pre>
      </div>

      {/* Subtle corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
      />
    </div>
  );
}
