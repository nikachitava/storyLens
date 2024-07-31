
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'darkblack': '#0D0E0F',
            'lightblack': '#131415',
            'primary': '#F15A22',
            'secondary': '#D2CFBB'
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          sans: ['Montserrat', 'sans-serif']
        },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

