/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx', './src/**/*.vue', './src/**/*.php', './src/**/*.twig', './src/**/*.md' ],
  theme: {
    extend: {
      fontFamily: {
        'Mynerve': ['Mynerve', 'serif'],
        'Lexend': ['Lexend', 'serif'],
      },
    },
  },
  plugins: [],
}