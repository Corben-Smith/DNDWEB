/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,ejs}", "./views/**/*.{html,ejs}"
  ],  
  theme: {
    extend: {
      colors: {
        'Purple': '#E6A9EC',
        'Red': '#D56672',
        'Blue': '#535D92',
        'Green': '#7D8C8E',
        'Mint': '#CCC7E7'
      },
      fontFamily: {
        kanit: ['Kanit'],
        robotomono: ['Roboto Mono'],
        sarabun: ['Sarabun']
      },
      dropShadow: {
        //glows red
        'glowred': '0 0 .5rem rgba(213, 102, 114, 1)',
        }
    },
  },
  plugins: [],
}

