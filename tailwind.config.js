/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],

  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        'white-dark': '#DDDDDD',
        'white': '#FFFFFF',
        'black': '#070707',
        'black-light': '#16181C',
        'gray': '#536471',
        'blue-dark': '#123540',
        'blue': '#034ef6',
        'red-light': '#f6716a',
        'red': '#ef3810',
        'transparent': 'transparent'
      }
    },
  },
  plugins: [],
}
