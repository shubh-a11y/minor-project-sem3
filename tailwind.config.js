/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#ff9933',
          light: '#ffb366',
          lighter: '#ffd9b3',
        },
        green: {
          DEFAULT: '#138808',
          light: '#4caf50',
          lighter: '#a5d6a7',
        },
        ashoka: {
          blue: '#000080',
        },
      },
    },
  },
  plugins: [],
}