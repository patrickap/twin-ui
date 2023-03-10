const Breakpoint = require('./src/configs/breakpoint.json');
const Color = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: Breakpoint.SM,
      md: Breakpoint.MD,
      lg: Breakpoint.LG,
      xl: Breakpoint.XL,
    },
    extend: {
      colors: {
        primary: Color.indigo,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
