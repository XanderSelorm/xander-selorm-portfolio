/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#06325d",
        "primary-text": "#333333",
        "secondary-text": "",
      },
    },
  },
  plugins: [],
}