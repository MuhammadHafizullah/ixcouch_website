/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        "mont":["Mont"],
        "exo":["Exo","sans-serif"],
        "garet":["Garet"]
      },
      colors:{
        "primary":"#53B3B8",
        "secondary":"#477CBF",
        "blue-700":"#787FF6",
      }
    },
  },
  plugins: [],
}