/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        obsidian: {
          base: '#09090e',
          surface: '#0e0d16',
          card: 'rgba(18, 16, 28, 0.75)',
          border: 'rgba(168, 85, 247, 0.18)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        algerian: ['Algerian', '"Cinzel Decorative"', 'Cinzel', '"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', '"Playfair Display"', 'serif'],
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        signature: ['"Caveat"', 'cursive'],
        script: ['"Caveat"', 'cursive'],
        elegant: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 22s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
