/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        border:'0 2px 0 0 #181b21'
      },
      colors: {
        'regal-blue': '#172B4D',
      },
    },
  },
  plugins: [],
}
