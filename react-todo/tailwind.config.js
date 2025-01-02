/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textGray: "#454C52",
        border: "#E5E7EA",
        redLabel: "#FDE9E9",
        red: "#F34141",
        yellowLabel: "#FBF2CB",
        yellow: "#E9A23B",
        greenLabel: "#D9F9E6",
        green: "#53B483"
      }
    },
  },
  plugins: [],
}