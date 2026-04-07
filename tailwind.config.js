/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: '#202A36',
        'brand-hover': '#1a2229',
        'brand-light': '#2d3e52',
        gold: '#C9A96E',
        'gold-light': '#E2C98A',
        'gold-dim': '#8A6E42',
        night: '#08090F',
        'night-2': '#0D0F1A',
        'night-3': '#12141F',
        cream: '#F0EBE1',
        'cream-dim': '#A89E8F',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'fade-up-delay': 'fadeUp 0.8s ease 0.15s both',
        'fade-up-delay-2': 'fadeUp 0.8s ease 0.3s both',
        'fade-up-delay-3': 'fadeUp 0.8s ease 0.45s both',
        'fade-in': 'fadeIn 1s ease both',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
