/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2B63F4",
        border: "#eaeaea",
      },
      animation: {
        'slide-in': 'slide-in 1s ease-in-out forwards'
      },
      // backgroundImage: {
      //   "hero-gradient": "linear-gradient(319.32deg, #F8F9FE 77.7%, #2B63F4 108.07%, #D9D9D9 123.25%)"
      // }
      keyframes: {
        'slide-in': {
          "0%": {
            transform: 'translateY(100%)',
          },
          "100%": {
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}
