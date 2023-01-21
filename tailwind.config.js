/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",
        primary_hover: "#BD303B",
        secondary: "#457B9D",
        secondary_hover: "#305F7D",
      },
      dropShadow: {
        "1image": "0 5px 10px rgba(255, 255, 255, 0.50)",
      },
    },
  },
  plugins: [],
};
