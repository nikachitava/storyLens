/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'darkBlack': '#0D0E0F',
            'lightBlack': '#131415',
            'primary': '#F15A22',
            'secondary': '#D2CFBB'
        }
    },
  },
  plugins: [],
}

