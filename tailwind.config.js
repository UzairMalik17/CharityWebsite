/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#37bdcf",
          off: "#4cfcc1",
        },
        light: {
          background: "#f0f0f0",
        },
        dark: {
          main: "#121212",
          background: "#474747",
        },
      },
    },
  },
  plugins: [],
};
