/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#4aa8d8",
        primaryBg: "#FBF7F4",
        secondaryBg: "#0F0E0E",
        primaryHover: "#EEE6E2",
        accentL: "#FF9944",
        accentR: "#FAFA37",
        descriptText: "#B8B8B8",
      },
      fontFamily: {
        sans: ["Bungee Spice", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
