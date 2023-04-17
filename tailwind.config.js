/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // rubik: ["Rubik Wet Paint", "cursive"],
        // nova: ["Nova Flat", "cursive"],
      },
      colors: {
        primary: "#47b7e7",
        secondary: "#11101e",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
  },
  plugins: [],
};
