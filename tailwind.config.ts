import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        navy: {
          DEFAULT: '#0F172A',
          50: '#f0f4ff',
          100: '#dde5f9',
          200: '#b3c2f0',
          300: '#7a93e0',
          400: '#4d6dce',
          500: '#2f4fb8',
          600: '#1e3a9e',
          700: '#172e83',
          800: '#0F172A',
          900: '#080f1e',
        },
        gold: {
          DEFAULT: '#D4A017',
          50: '#fdf8e7',
          100: '#faefc4',
          200: '#f5dc84',
          300: '#ecc63f',
          400: '#D4A017',
          500: '#b88510',
          600: '#956a0d',
          700: '#724f0f',
          800: '#5a3e12',
          900: '#3d2a0e',
        },
        hope: {
          DEFAULT: '#4CAF50',
          50: '#f0fdf0',
          100: '#dcfadc',
          200: '#adf4ae',
          300: '#74e676',
          400: '#4CAF50',
          500: '#3a9c3e',
          600: '#2c7f30',
          700: '#266529',
          800: '#1e4e21',
          900: '#163518',
        },
        // Semantic
        background: '#F8FAFC',
        foreground: '#111827',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.8) 100%)',
        'card-overlay': 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 60%, transparent 100%)',
        'section-overlay': 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'gold': '0 4px 32px rgba(212, 160, 23, 0.25)',
        'navy': '0 8px 40px rgba(15, 23, 42, 0.3)',
        'glow': '0 0 40px rgba(212, 160, 23, 0.15)',
      },
      aspectRatio: {
        'cinema': '21 / 9',
        'wide': '16 / 9',
        'portrait': '3 / 4',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.gold.DEFAULT'),
              '&:hover': { color: theme('colors.gold.300') },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
