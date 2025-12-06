/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Armored Core 6 inspired palette
        'ac-dark': '#0a0a0f',
        'ac-darker': '#050508',
        'ac-gray': '#1a1a24',
        'ac-gray-light': '#2a2a38',
        'ac-border': '#3a3a4a',
        'ac-red': 'rgb(255, 51, 51)',
        'ac-red-light': '#ff5555',
        'ac-orange': 'rgb(255, 102, 51)',
        'ac-cyan': 'rgb(0, 212, 255)',
        'ac-cyan-dark': '#0099cc',
        'ac-white': '#e8e8f0',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 0.15s infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(255, 51, 51, 0.5), 0 0 10px rgba(255, 51, 51, 0.3), 0 0 15px rgba(255, 51, 51, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(255, 51, 51, 0.8), 0 0 20px rgba(255, 51, 51, 0.5), 0 0 30px rgba(255, 51, 51, 0.3)',
          },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.6' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


