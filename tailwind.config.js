/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1A3C2E',
        'forest-light': '#2A5C44',
        mint: '#A8D5B5',
        'mint-light': '#D4EDD9',
        cream: '#F9F6EF',
        'cream-dark': '#EDE8DC',
        gold: '#E8A838',
        'gold-light': '#F2C46D',
        charcoal: '#2D2D2D',
        'charcoal-light': '#555555',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
