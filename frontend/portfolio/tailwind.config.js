/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#011627',
        secondary: '#001e35',
        subSecondary: 'rgb(2 132 199 / 0.7)',
        btn: '#0284c7',
        btn2: '#198754',
        redDark: '#dc3545',
      },
      fontFamily: {
        rubik: ['Rubik', 'Arial','sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".after-text-stroke": {
          "&::after": {
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "white",
          },
        },
      });
    },
  ],
}