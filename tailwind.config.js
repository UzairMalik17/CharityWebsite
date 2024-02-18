/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#37bdcf",
          off: "#4cfcc1",
        },
      },
    },
  },
  plugins: [],
};
