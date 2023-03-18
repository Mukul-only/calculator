/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        pureBlack: "#131316",
        black: "#111111",
        veryDarkBlue: "#003047",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
