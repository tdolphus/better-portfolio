/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        accent: '#915eff',
        'accent-light': '#c1a5ff',
        success: '#4ade80',
        warning: '#facc15',
        error: '#f87171',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
        button: '0px 10px 20px -10px #211e35',
      },
      screens: {
        xs: '450px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(5, 8, 22, 0.8), rgba(5, 8, 22, 0.9)), url('https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb')",
      },
    },
  },
  plugins: [],
};