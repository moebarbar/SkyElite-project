/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Hero / light palette
        ink: '#1C1E28',
        'ink-2': '#3A3530',
        'ink-3': '#7A7060',
        'ink-4': '#A89E95',
        cream: '#F7F4EF',
        'cream-2': '#EFEBE3',
        'cream-3': '#E2DAD0',
        'cream-4': '#D4C9BC',
        'gold-dark': '#8B6C1A',
        'gold-mid': '#C9A96E',
        'gold-light': '#E2C98A',
        // Dark palette (footer)
        night: '#08090F',
        'night-2': '#0D0F1A',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'fade-up-delay': 'fadeUp 0.8s ease 0.15s both',
        'fade-up-delay-2': 'fadeUp 0.8s ease 0.3s both',
        'fade-up-delay-3': 'fadeUp 0.8s ease 0.45s both',
        'fade-in': 'fadeIn 1s ease both',
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
}
