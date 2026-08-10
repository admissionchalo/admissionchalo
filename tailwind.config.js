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
          DEFAULT: "#F9B929",
          light: "#FFCF4D",
          dark: "#C99416",
        },
        charcoal: {
          DEFAULT: "#2E2F31",
          light: "#55565A",
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
