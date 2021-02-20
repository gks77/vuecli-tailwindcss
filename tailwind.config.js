module.exports = {
  purge: {
    mode: 'layers',
    content: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts', 'public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
