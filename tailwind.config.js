/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  /** @type {import('daisyui').Config} */
  daisyui: {
    themes: ['light'/* , 'dark' */],
  },
  plugins: [require('daisyui')],
}

