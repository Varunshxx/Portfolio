/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    lg: {max: "2023px"},
    sm: {max: "1000px"},
  },
  plugins: [],
}