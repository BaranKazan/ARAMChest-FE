module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00dde0",
          50: "#32ffff",
          100: "#28ffff",
          200: "#1efbfe",
          300: "#14f1f4",
          400: "#0ae7ea",
          500: "#00dde0",
          600: "#00d3d6",
          700: "#00c9cc",
          800: "#00bfc2",
          900: "#00b5b8"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
