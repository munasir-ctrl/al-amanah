/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6fb',
          100: '#d6e8f5',
          200: '#b0d0ea',
          300: '#7fb0d8',
          400: '#4a8cc2',
          500: '#2e6fa5',
          600: '#1d5688',
          700: '#16456f',
          800: '#123a5e',
          900: '#0e2e4a',
          950: '#081d33',
        },
        accent: {
          50: '#edfcf6',
          100: '#d2f8e8',
          200: '#a8f0d4',
          300: '#6ee3ba',
          400: '#34cd9b',
          500: '#14b07e',
          600: '#089066',
          700: '#087354',
          800: '#0a5c44',
          900: '#094c3a',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d9',
          300: '#829fbd',
          400: '#5a7c9c',
          500: '#3e6182',
          600: '#2e4d6a',
          700: '#243d56',
          800: '#1c3043',
          900: '#142336',
          950: '#0c1722',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(20, 35, 54, 0.08), 0 4px 16px -4px rgba(20, 35, 54, 0.06)',
        card: '0 1px 3px -1px rgba(20, 35, 54, 0.06), 0 8px 24px -8px rgba(20, 35, 54, 0.10)',
        premium: '0 4px 24px -6px rgba(20, 35, 54, 0.12), 0 12px 48px -12px rgba(20, 35, 54, 0.08)',
        glow: '0 0 0 1px rgba(20, 184, 126, 0.15), 0 8px 32px -8px rgba(20, 184, 126, 0.20)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradientShift 6s ease infinite',
        'count-up': 'countUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
