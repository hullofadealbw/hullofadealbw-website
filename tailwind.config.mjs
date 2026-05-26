/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f5ff',
          100: '#dbeafe',
          500: '#1e3a5f',
          600: '#162d4a',
          700: '#0f2035',
          800: '#0a1728',
          900: '#060e18',
        },
        gold: {
          400: '#f6c343',
          500: '#e5a800',
          600: '#c48f00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
