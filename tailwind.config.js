/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffe1cd',
          200: '#ffc49b',
          300: '#ffa669',
          400: '#ff8937',
          500: '#ff6b05',
          600: '#cc5604',
          700: '#994003',
          800: '#662b02',
          900: '#331501',
        },
        neutral: {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#d6d6d6',
          300: '#c2c2c2',
          400: '#adadad',
          500: '#999999',
          600: '#7a7a7a',
          700: '#5c5c5c',
          800: '#3d3d3d',
          900: '#1f1f1f',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.7s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
      },
    },
  },
  plugins: [],
};