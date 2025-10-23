/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Anton', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['5.4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }], // 72px
        '6xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }], // 60px
        '5xl': ['3.6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }], // 48px (H1)
        '4xl': ['2.7rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }], // 36px (H2)
        '3xl': ['2.4rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // 32px (H3)
        '2xl': ['1.05rem', { lineHeight: '1.2', letterSpacing: '0' }], // 28px
        'xl': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0' }], // 20px
        'lg': ['0.675rem', { lineHeight: '1.6', letterSpacing: '0' }], // 18px (Body)
        'base': ['0.6rem', { lineHeight: '1.6', letterSpacing: '0' }], // 16px (Body)
        'sm': ['0.525rem', { lineHeight: '1.4', letterSpacing: '0' }], // 14px
        'xs': ['0.45rem', { lineHeight: '1.4', letterSpacing: '0.08em' }], // 12px
        'xxs': ['0.4875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }], // 13px (Overline)
      },
      borderRadius: {
        'xl': 'var(--radius)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'brand': 'var(--shadow)',
        'sm': 'var(--shadow-sm)',
        'lg': 'var(--shadow-lg)',
        'ambient': '0 12px 40px rgba(0,0,0,0.06)',
      },
      colors: {
        'brand': {
          50: '#FEFCF7',
          100: '#FDF7EA',
          200: '#FAE9C2',
          300: '#F5D28A',
          400: '#EEB450',
          500: '#E5952B', // Original gold with better contrast
          600: '#D4AF37', // The exact accent color
          700: '#A87B1F',
          800: '#7D5A19',
          900: '#5F4216',
        },
        'bg': {
          'surface': 'var(--bg-surface)',
          'elevated': 'var(--bg-elevated)',
        },
        'text': {
          'primary': 'var(--text-primary)',
          'secondary': 'var(--text-secondary)',
          'onImage': 'var(--text-onImage)',
        },
        'border': {
          'hairline': 'var(--border-hairline)',
        },
        'accent': 'var(--accent)',
        'glass': 'var(--glass)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px', // Updated to 1280px
        '2xl': '1536px',
      },
      maxWidth: {
        'container': '1200px',
        'container-lg': '1280px',
      },
      spacing: {
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
      },
      transitionTimingFunction: {
        'brand': 'var(--easing)',
        'ease-out-cubic': 'cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        'quick': 'var(--dur-quick)',
        'default': 'var(--dur)',
        'long': 'var(--dur-long)',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}