/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        inter: ["Inter", "cursive"],
        jaro: ["Jaro", "cursive"],
        orelega: ["Orelega One", "cursive"],
      },
      colors: {
        primary: "#8B5DFF",
        secondary: "#F6F6F6",
        tertiary: "#E5E5E5",
        dark_secondary: "#141131",
        dark_tertiary: "#0d1118",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

