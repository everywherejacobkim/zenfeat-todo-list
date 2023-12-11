/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4F3F7",
        "primary-action": "#2D75DD",
      },
    },
  },
  plugins: [],
}

