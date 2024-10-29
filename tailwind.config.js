/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        lilita: ["Lilita One", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        spline: ["Spline Sans", "sans-serif"],
      },
      colors: {
        primary: '#884BCA'
    },
    rotate: {
      '6': '-6deg',
    }
  }
},

  plugins: [],
}


