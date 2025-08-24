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
        dark_secondary: "#212121",
        dark_tertiary: "#3A3A3A",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

