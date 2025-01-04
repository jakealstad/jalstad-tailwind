/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.html",
    "./static/*.{css,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway','sans-serif'],
      },
    },
  },
  plugins: [],
}

