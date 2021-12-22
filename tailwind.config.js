module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: "#010101",
        white: "#FFFFFF",
        gray: {
          800: "#292929",
          900: "#111111"
        },
        silver: "#C1C1C1",
        gold: {
          900: "#C39031",
          800: "#D0A85C"
        },
        blue: {
          900: "#061C25",
          800: "#006680",
          700: "#13D8F6"
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
