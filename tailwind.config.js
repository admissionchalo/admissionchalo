/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./lib/**/*.{js,jsx}",
],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFD400",
          light: "#FFE14D",
          dark: "#E6BF00",
        },
        charcoal: {
          DEFAULT: "#0A0A0A",
          light: "#444444",
        },
        graybg: "#FAFAF9",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        heading: ["Arial", "Helvetica", "sans-serif"],
        body: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};