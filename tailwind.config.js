const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      color: {
        light: "#ffffff",
        dark: "#000000",
        green: "#72c053"
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
