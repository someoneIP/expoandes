/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '98': '0.98',
      },
      colors: {
        navy: {
          DEFAULT: '#0E2A4E',
          50: '#E8EDF3',
          100: '#D1DAE7',
          200: '#A3B4CF',
          300: '#758EB7',
          400: '#47699F',
          500: '#294F87',
          600: '#1E3D6B',
          700: '#0E2A4E',
          800: '#0A1F3A',
          900: '#07162B',
        },
        orange: {
          DEFAULT: '#F26522',
          50: '#FDF0EB',
          100: '#FAE0D5',
          200: '#F4C1AB',
          300: '#EEA280',
          400: '#E88456',
          500: '#F26522',
          600: '#C54F15',
          700: '#9E3F10',
          800: '#772F0C',
          900: '#501F08',
        },
        surface: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
