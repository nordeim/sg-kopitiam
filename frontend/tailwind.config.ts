import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'sunrise-coral': {
          DEFAULT: 'rgb(var(--color-sunrise-coral) / <alpha-value>)',
          light: 'rgb(var(--color-sunrise-coral-light) / <alpha-value>)',
          dark: 'rgb(var(--color-sunrise-coral-dark) / <alpha-value>)',
        },
        'golden-hour': {
          DEFAULT: 'rgb(var(--color-golden-hour) / <alpha-value>)',
          light: 'rgb(var(--color-golden-hour-light) / <alpha-value>)',
          dark: 'rgb(var(--color-golden-hour-dark) / <alpha-value>)',
        },
        // Coffee
        'espresso-dark': 'rgb(var(--color-espresso-dark) / <alpha-value>)',
        'coffee-medium': 'rgb(var(--color-coffee-medium) / <alpha-value>)',
        'coffee-light': 'rgb(var(--color-coffee-light) / <alpha-value>)',
        'mocha-cream': 'rgb(var(--color-mocha-cream) / <alpha-value>)',
        // Surfaces
        'latte-cream': {
          DEFAULT: 'rgb(var(--color-latte-cream) / <alpha-value>)',
          warm: 'rgb(var(--color-latte-cream-warm) / <alpha-value>)',
        },
        'ceramic-white': 'rgb(var(--color-ceramic-white) / <alpha-value>)',
        'paper-aged': 'rgb(var(--color-paper-aged) / <alpha-value>)',
        // Accents
        'mint-fresh': 'rgb(var(--color-mint-fresh) / <alpha-value>)',
        'mint-deep': 'rgb(var(--color-mint-deep) / <alpha-value>)',
        'teal-retro': 'rgb(var(--color-teal-retro) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        warm: 'var(--shadow-warm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        glow: 'var(--shadow-glow-coral)',
        button: 'var(--shadow-button)',
      },
      animation: {
        'slow-rotate': 'slow-rotate 120s linear infinite',
        'bean-bounce': 'bean-bounce 2s ease-in-out infinite',
        'steam-rise': 'steam-rise 2s ease-in-out infinite',
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
