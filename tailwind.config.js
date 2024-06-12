/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        charcoal: '#34313D',
        tuna: '#3A3054',
        purple: '#4B3F6B',
        grey: '#9E9AA8',
        porcelain: '#EFF1F7',
        primary: '#2BD0D0',
        faded: '#9AE3E3',
        dark: '#232127',
        error: '#F46363',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
