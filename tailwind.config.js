module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
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
