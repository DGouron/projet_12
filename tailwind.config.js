/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#020203',
        'secondary': '#FFFFFF',
        'title': '#20253A',
        'legend': '#74798C',
        'highlight': '#FF0101',
      },
      boxShadow: {
        'layout': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

