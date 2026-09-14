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
        crimson: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa1a1',
          400: '#ff6b6b',
          500: '#e52e2e',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        obsidian: {
          base: '#0c0d12',
          surface: '#12131a',
          card: 'rgba(22, 23, 31, 0.85)',
          border: 'rgba(255, 255, 255, 0.12)',
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
