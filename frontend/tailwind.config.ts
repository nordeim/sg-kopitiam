import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'sunrise-amber': 'var(--sunrise-amber)',
        'terracotta-warm': 'var(--terracotta-warm)',
        'cream-white': 'var(--cream-white)',
        'espresso-dark': 'var(--espresso-dark)',
        'coral-pop': 'var(--coral-pop)',
        'sage-fresh': 'var(--sage-fresh)',
        'cinnamon-glow': 'var(--cinnamon-glow)',
        'honey-light': 'var(--honey-light)',
        'mocha-medium': 'var(--mocha-medium)',
        
        // Extended Palette
        'caramel-swirl': 'var(--caramel-swirl)',
        'butter-toast': 'var(--butter-toast)',
        'vintage-paper': 'var(--vintage-paper)',
        'kopi-black': 'var(--kopi-black)',

        // Legacy Mappings for existing components
        'sunrise-coral': 'var(--coral-pop)',
        'golden-hour': 'var(--sunrise-amber)',
        'latte-cream': 'var(--cream-white)',
        'mint-fresh': 'var(--sage-fresh)',
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
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
        button: '0 4px 0 var(--terracotta-warm)', // Verbatim chunky button style
      },
      backgroundImage: {
        'texture-grain': 'var(--texture-grain)',
        'texture-sunburst': 'var(--texture-sunburst)',
        'texture-circles': 'var(--texture-circles)',
        'texture-arcs': 'var(--texture-arcs)',
        'gradient-sunrise': 'var(--gradient-sunrise)',
        'gradient-warm-glow': 'var(--gradient-warm-glow)',
        'gradient-sunset-stripe': 'var(--gradient-sunset-stripe)',
      },
      animation: {
        'slow-rotate': 'slow-rotate 120s linear infinite',
        'bean-bounce': 'bean-bounce 2s ease-in-out infinite',
        'steam-rise': 'steam-rise 2s ease-in-out infinite',
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'marker-pulse': 'marker-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;