module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        c2ff72: "#c2ff72",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
