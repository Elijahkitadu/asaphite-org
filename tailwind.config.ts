import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#f0f4ff', 100: '#dde5f9', 200: '#b3c2f0',
          300: '#7a93e0', 400: '#4d6dce', 500: '#2f4fb8',
          600: '#1e3a9e', 700: '#172e83', 800: '#0F172A', 900: '#080f1e',
        },
        gold: {
          DEFAULT: '#D4A017',
          50: '#fdf8e7', 100: '#faefc4', 200: '#f5dc84',
          300: '#ecc63f', 400: '#D4A017', 500: '#b88510',
          600: '#956a0d', 700: '#724f0f', 800: '#5a3e12', 900: '#3d2a0e',
        },
        hope: {
          DEFAULT: '#4CAF50',
          50: '#f0fdf0', 100: '#dcfadc', 200: '#adf4ae',
          300: '#74e676', 400: '#4CAF50', 500: '#3a9c3e',
          600: '#2c7f30', 700: '#266529', 800: '#1e4e21', 900: '#163518',
        },
        background: '#F8FAFC',
        foreground:  '#111827',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body:    ['var(--font-inter)',   'sans-serif'],
        sans:    ['var(--font-inter)',   'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease-out forwards',
        'fade-in':  'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: '0' },                                '100%': { opacity: '1' }                             },
        scaleIn:  { '0%': { opacity: '0', transform: 'scale(0.95)' },      '100%': { opacity: '1', transform: 'scale(1)' }      },
      },
      backgroundImage: {
        'card-overlay':    'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 60%, transparent 100%)',
        'section-overlay': 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)',
      },
      boxShadow: {
        'card':       '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.16)',
        'gold':       '0 4px 32px rgba(212,160,23,0.25)',
        'navy':       '0 8px 40px rgba(15,23,42,0.3)',
      },
      transitionDuration: { '400': '400ms', '600': '600ms' },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
