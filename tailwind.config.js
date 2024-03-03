/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        liter: ['Liter-Regular', 'sans-serif'],
        igra: ['Igra-Sans', 'sans']
      }
    }
  },
  plugins: []
};
