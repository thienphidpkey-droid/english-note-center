/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hand: ['Patrick Hand', 'cursive'],
      },
      colors: {
        primary: '#3B82F6', // Blue-500
        secondary: '#F59E0B', // Amber-500
        paper: '#FFFFFF',
        'paper-off': '#F9FAFB',
      },
      boxShadow: {
        'paper': '2px 4px 12px rgba(0,0,0,0.08)',
        'paper-hover': '4px 8px 20px rgba(0,0,0,0.12)',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
