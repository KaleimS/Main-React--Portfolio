/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", 'sans-serif'],
      },
      colors: {
        'amber': {
        100: '#fbf3ea',
        200: '#f7e8d4',
        300: '#f4e0c6',
        400: '#f3dcbf',
        500: '#efd1a9',
        600: '#ebc594',
        700: '#e7b97e',
        800: '#e2ae69',
        900: '#dea254',
      },
      'yellow': {
        100: '#f5e1c8',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#988767',
        900: '#897a5e',
      },
      }
    },
    
  },
  plugins: [],
}

