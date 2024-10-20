module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#9FF443"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
