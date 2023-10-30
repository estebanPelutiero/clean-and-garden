const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F7F7F1',
      'green': '#6B7A2F',
      'dark-green': '#016844',
      'black': '#2F2F30',
      'blackbg': '#000000'
    },

    fontFamily: {
      'urbanist': ['Urbanist', 'sans-serif'],
      'comforta': ['Comfortaa', 'sans-serif']
    },

    extend: {},
  },
  plugins: [],
});

