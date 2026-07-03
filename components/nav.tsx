'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { site } from '@/content/site';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Decoding', href: '#about' },
  { label: 'Now', href: '#now' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Journey', href: '#journey' },
  { label: 'Connect', href: '#connect' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on hash change
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-400',
        scrolled
          ? 'border-b border-border-subtle bg-bg-base/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav
        aria-label="Primary"
        className="container-content flex h-16 items-center justify-between"
      >
        <a
          href="#top"
          className="link-underline font-display text-base font-semibold tracking-tight text-text-primary"
        >
          {site.name}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline font-mono text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="rounded-full border border-border-subtle bg-bg-elevated px-4 py-1.5 font-mono text-xs text-text-primary transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-md border border-border-subtle bg-bg-elevated p-2 text-text-primary md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border-subtle bg-bg-base/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 font-mono text-sm text-text-muted transition-colors hover:bg-bg-elevated hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  className="mt-2 block rounded-md border border-border-subtle bg-bg-elevated px-3 py-2.5 text-center font-mono text-xs text-text-primary"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}