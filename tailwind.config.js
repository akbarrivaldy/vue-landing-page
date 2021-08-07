module.exports = {
  purge: {
    enabled: true, // This will *always* minify, even on dev builds
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '4rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
