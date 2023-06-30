/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'Raleway, sans-serif',
      },
      colors: {
        'Blue-De-France': '#2A7AE4',
        'Wood-Charcoal': '#464646',
        'Grey-of-darkness': '#A2A2A2',
      },
      backgroundImage: {
        banner: "url('../src/images/banner-unoo.jpeg')",
      },
    },
  },
  plugins: [],
}
