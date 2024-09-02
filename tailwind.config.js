const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
        colors: {
            'darkblack': '#0D0E0F',
            'lightblack': '#131415',
            'primary': '#F15A22',
            'secondary': '#D2CFBB',
            'greytext': '#C6D2D2'
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          sans: ['Montserrat', 'sans-serif']
        },
        scrollBar: {
          DEFAULT: 'orange', 
          hover: '#e69500',
        }
    },
  },
  plugins: [ flowbite.plugin(), require('tailwind-scrollbar'),],
  darkMode: 'selector',
}

