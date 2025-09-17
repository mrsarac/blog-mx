/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './core/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fdfdfc',
          200: '#f9f9f8',
          300: '#f1f0ef',
          400: '#e9e9e7',
          500: '#e2e1de',
          600: '#dad9d6',
          700: '#cfceca',
          800: '#bcbbb5',
          900: '#8d8d86',
          1000: '#82827c',
          1100: '#63635e',
          1200: '#21201c',
        },
      },
      fontFamily: {
        sans: ['Sans', 'system-ui', 'sans-serif'],
        serif: ['Serif', 'Georgia', 'serif'],
        mono: ['Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        border: '0 0 0 1px rgba(0, 0, 0, 0.08)',
        'focus-ring': '0 0 0 3px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
