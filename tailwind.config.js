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
        dark: {
          950: '#05060a',
          900: '#07080d',
          850: '#0b0c14',
          800: '#0f111c',
          750: '#141726',
          700: '#1a1e32',
          600: '#262c49',
        },
        electric: {
          blue: '#38bdf8',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 28s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))' },
        }
      },
      boxShadow: {
        'electric-sm': '0 0 15px -3px rgba(99, 102, 241, 0.3)',
        'electric-md': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'electric-lg': '0 0 40px -10px rgba(99, 102, 241, 0.5)',
      }
    },
  },
  plugins: [],
}
