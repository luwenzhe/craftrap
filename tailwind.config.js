/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          900: '#312e81',
          800: '#3730a3',
          700: '#4338ca',
          600: '#4f46e5',
          300: '#a5b4fc',
          200: '#c7d2fe',
        },
        pink: {
          700: '#be185d',
          600: '#db2777',
          500: '#ec4899',
        },
      },
    },
  },
  plugins: [],
}; 