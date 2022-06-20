/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{

      },
      colors:{
        custom:{
          baseBG:'#009FAB'
        },
        
      },
      padding:{
        custom:'1000px'
      },
      translate :{
        topCircle:'920px'
      }
    },
  },
  plugins: [],
}
