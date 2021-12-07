module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#141311",
      secondary: "#f6dec2",
      customIssue: "#fae8d2",
    }),

    textColor: theme => ({
      ...theme("colors"),
      primary: "#141311",
      secondary: "#f6dec2",
    }),
    extend: {
      height: {
        hero: "calc(100vh - 90px)",
      },
      fontFamily: {
        customFont1: ["Playfair Display"],
        customFont2: ["PT Serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
