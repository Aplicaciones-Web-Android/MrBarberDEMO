/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/vue-tailwind-datepicker/**/*.js',
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      backgroundImage :{
        "app" : "url('/img/logo1.png')"
      }
    },
    colors: {
      'D2AB66' : '#D2AB66',
      'd2ac67' : '#d2ac67',
      'FEF9C2' : '#FEF9C2',
      'brown1' : '#854E15',
      '2B2B2B' : '#2B2B2B',
      'black' : '#1C1D18',
      'white' : '#FFFFFF',
      'gray' : '#E0E0E0',
      'blue' : '#1f2937',
      'red' : '#dc2626',
      'red2' : '#F21B3F'




    },
  },
  plugins: [],
}