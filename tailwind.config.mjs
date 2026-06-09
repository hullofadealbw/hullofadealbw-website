/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: 'var(--brand-ink)',
          'ink-raised': 'var(--brand-ink-raised)',
          'ink-deep': 'var(--brand-ink-deep)',
          cream: 'var(--brand-cream)',
          'cream-soft': 'var(--brand-cream-soft)',
          paper: 'var(--brand-paper)',
          powder: 'var(--brand-powder)',
          'powder-soft': 'var(--brand-powder-soft)',
          slate: 'var(--brand-slate)',
          'slate-strong': 'var(--brand-slate-strong)',
          teal: 'var(--brand-teal)',
          'teal-strong': 'var(--brand-teal-strong)',
          'teal-ink': 'var(--brand-teal-ink)',
          border: 'var(--brand-border)',
        },
      },
      borderRadius: {
        brand: 'var(--radius)',
      },
      boxShadow: {
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
};
