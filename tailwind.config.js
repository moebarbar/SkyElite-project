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
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'fade-up-delay': 'fadeUp 0.8s ease 0.15s both',
        'fade-up-delay-2': 'fadeUp 0.8s ease 0.3s both',
        'fade-up-delay-3': 'fadeUp 0.8s ease 0.45s both',
        'fade-in': 'fadeIn 1s ease both',
      },
    },
  },
  plugins: [],
}
