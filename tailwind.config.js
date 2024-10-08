/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // montserrat: ['Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        "greyQo": ["Grey Qo", 'cursive'],
        varelaRound: ["Varela Round", 'sans-serif'],
        "matemasie": ['Matemasie','sans-serif'],
        // matemasie: ["Matemasie",'sans-serif'],
        "roboto": ["Roboto", 'sans-serif'],
        "madimiOne": ["Madimi One", 'sans-serif'],
       "eduVic":[ "Edu VIC WA NT Beginner", 'cursive'],
       poppins: ["Poppins", 'sans-serif'],
       "dmSerifText": [ "DM Serif Text", 'serif']
        
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
