/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'espresso': '#3C2413',
        'cream': '#F5F1E8',
        'gold': '#D4A574',
        'latte': '#E8D5C4',
      },
      fontFamily: {
        'sans': ['Inter', 'Lato', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'Oswald', 'serif'],
      },
    },
  },
  plugins: [],
}

