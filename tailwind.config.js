/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    screens: {
      'sm': '306px',

      'md': '504px',

      'lg': '768px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

