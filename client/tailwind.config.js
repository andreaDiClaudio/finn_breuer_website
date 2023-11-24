/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
      }
    }
  },
  plugins: [],
}

