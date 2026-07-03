'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-base px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="eyebrow mb-6 justify-center">404 · decoding error</div>
        <h1 className="font-display text-hero font-bold tracking-tight text-text-primary">
          Still decoding<span className="text-accent">…</span>
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          This URL hasn&apos;t been resolved yet. Either the page doesn&apos;t exist,
          or my decoder is off today.
        </p>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 font-mono text-sm text-text-faint"
        >
          <span className="inline-block h-3 w-2 -mb-0.5 bg-accent align-middle" />{' '}
          retrying…
        </motion.div>
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated px-5 py-2.5 font-mono text-sm text-text-primary transition-all hover:border-accent hover:bg-accent/10"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}