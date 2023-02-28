const breakpoints = require('./src/theme/breakpoints.json');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      ...breakpoints,
    },
    extend: {
      colors: {
        brand: colors.indigo,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
