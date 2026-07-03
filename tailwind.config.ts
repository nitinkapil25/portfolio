import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{ts,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PRD §6.2 — dark theme palette
        bg: {
          base: '#0A0A0B',
          elevated: '#131316',
          hover: '#1C1C20',
        },
        border: {
          subtle: '#26262C',
        },
        text: {
          primary: '#EDEDEF',
          muted: '#8B8B92',
          faint: '#5A5A60',
        },
        accent: {
          DEFAULT: '#A78BFA',
          hover: '#B8A0FB',
          muted: '#7C6BC9',
        },
        status: {
          success: '#34D399',
          warning: '#FBBF24',
          queued: '#5A5A60',
        },
      },
      fontFamily: {
        // PRD §6.1
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // PRD §6.1 type scale
        'hero': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'section': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'project': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        'content': '1200px',
        'prose': '62ch',
      },
      borderRadius: {
        'card': '12px',
      },
      transitionTimingFunction: {
        // PRD §6.3 motion language
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth-in-out': 'cubic-bezier(0.7, 0, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
        '1200': '1200ms',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'underline-draw': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'pulse-dot': 'pulse-dot 3s ease-in-out infinite',
        'fade-up': 'fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;