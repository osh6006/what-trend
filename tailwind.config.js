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
      backgroundImage: {
        player: "url('/public/sports/player.webp')",
        team: "url('/public/sports/team.webp')",
      },
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
