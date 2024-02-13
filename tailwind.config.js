/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans - serif"],
      serif: ["Lato", "sans - serif"],
    },
    extend: {
      container: {
        screens: {
          lg: "1177px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
