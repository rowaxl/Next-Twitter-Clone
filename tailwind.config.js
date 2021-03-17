const px = (pixels) => `${pixels / 16} rem`

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  important: false,
  theme: {
    backgroundColor: theme => theme("colors"),
    padding: theme => theme("spacing"),
    margin: theme => ({ ...theme("spacing"), "-1": "-1px" }),
    textColor: theme => theme("colors"),
    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      'full': '100vh',
    }
  },
  darkMode: 'media',
  variants: {},
}