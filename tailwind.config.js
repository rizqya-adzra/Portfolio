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
        primary: "#714AFF",
        secondary: "#f7f7f7",
        tertiary: "",
        dark_secondary: "#2b2b2b",
        dark_tertiary: "",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

