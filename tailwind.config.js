
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        'main-bg': '#F9F5F2',
        'accent-blue': '#91A8EC',
        'accent-green': '',
        'accent-yellow': '#F7CB45',
        'accent-pink': '',

        "main-text": "#0d0c22",
        "titles": "#282825",
        "text-light": "#5c5b66"
      },
      fontFamily:{
        'work-sans': ["Work Sans", "sans-serif"],
        'inter': ["Inter", "sans-serif"]

      }, 
      boxShadow: {
        'offset-black' : '4px 4px black'
      }
    },
  },
  plugins: [

  ],
}


;
