/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a96e',
        'gold-light': '#e8d5aa',
        cream: '#f5f2ee',
        'dark-bg': '#0a0a0a',
        'dark-card': '#141414',
        'dark-surface': '#0d0d0d',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
