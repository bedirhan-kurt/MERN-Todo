/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },},
      colors: {
        textGray: "#454C52",
        border: "#E5E7EA",
        redLabel: "#FDE9E9",
        red: "#F34141",
        yellowLabel: "#FBF2CB",
        yellow: "#E9A23B",
        greenLabel: "#D9F9E6",
        green: "#53B483"
        /*
          Dark text: gray-300
          Dark bg: gray-800
          Dark border: gray-700
          Hover dark text: white
          Hover dark bg: gray-700
         */
      }
    },
  },
  plugins: [],
}