const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html'],
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
      textDecoration: ['hover', 'focus', 'active'],
      fontWeight: ['hover', 'focus', 'active'],
      borderWidth: ['hover', 'focus', 'active'],
      borderRadius: ['hover', 'focus', 'active'],
      ringWidth: ['hover', 'focus', 'active'],
      ringOffsetWidth: ['hover', 'focus', 'active'],
      dropShadow: ['hover', 'focus', 'active'],
      boxShadow: ['hover', 'focus', 'active'],
      saturate: ['group-hover', 'hover', 'focus', 'active']
    }
  },

  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    maxWidth: {
      '5xs': '150px',
      '4xs': '200px',
      '3xs': '270px',
      '2xs': '360px',
      xs: '480px',
      ...defaultTheme.screens
    },

    extend: {
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.5)'
      },
      fontSize: {
        '3xs': ['0.4rem', '1.625'],
        '2xs': ['0.6rem', '1.625'],
        ...defaultTheme.fontSize
      },
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans],
        display: ['var(--ff-display)', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          '000': 'var(--cl-primary-000)',

          '090': 'var(--cl-primary-090)',
          100: 'var(--cl-primary-100)',
          130: 'var(--cl-primary-130)',
          150: 'var(--cl-primary-150)',
          180: 'var(--cl-primary-180)',

          200: 'var(--cl-primary-200)',
          300: 'var(--cl-primary-300)',
          400: 'var(--cl-primary-400)',
          500: 'var(--cl-primary-500)',
          600: 'var(--cl-primary-600)',
          700: 'var(--cl-primary-700)',
          800: 'var(--cl-primary-800)',
          900: 'var(--cl-primary-900)'
        },
        secondary: {
          '000': 'var(--cl-secondary-000)',
          100: 'var(--cl-secondary-100)',
          200: 'var(--cl-secondary-200)',
          300: 'var(--cl-secondary-300)',
          400: 'var(--cl-secondary-400)',
          500: 'var(--cl-secondary-500)',
          600: 'var(--cl-secondary-600)',
          700: 'var(--cl-secondary-700)',
          800: 'var(--cl-secondary-800)',
          900: 'var(--cl-secondary-900)'
        },
        accent: {
          '000': 'var(--cl-accent-000)',
          100: 'var(--cl-accent-100)',
          200: 'var(--cl-accent-200)',
          300: 'var(--cl-accent-300)',
          400: 'var(--cl-accent-400)',
          500: 'var(--cl-accent-500)',
          600: 'var(--cl-accent-600)',
          700: 'var(--cl-accent-700)',
          800: 'var(--cl-accent-800)',
          900: 'var(--cl-accent-900)',
          1: {
            '000': 'var(--cl-accent-1-000)',
            100: 'var(--cl-accent-1-100)',
            200: 'var(--cl-accent-1-200)',
            300: 'var(--cl-accent-1-300)',
            400: 'var(--cl-accent-1-400)',
            500: 'var(--cl-accent-1-500)',
            600: 'var(--cl-accent-1-600)',
            700: 'var(--cl-accent-1-700)',
            800: 'var(--cl-accent-1-800)',
            900: 'var(--cl-accent-1-900)'
          },
          2: {
            '000': 'var(--cl-accent-2-000)',
            100: 'var(--cl-accent-2-100)',
            200: 'var(--cl-accent-2-200)',
            300: 'var(--cl-accent-2-300)',
            400: 'var(--cl-accent-2-400)',
            500: 'var(--cl-accent-2-500)',
            600: 'var(--cl-accent-2-600)',
            700: 'var(--cl-accent-2-700)',
            800: 'var(--cl-accent-2-800)',
            900: 'var(--cl-accent-2-900)'
          }
        },
        neutral: {
          '000': 'var(--cl-neutral-000)',
          100: 'var(--cl-neutral-100)',
          200: 'var(--cl-neutral-200)',
          300: 'var(--cl-neutral-300)',
          400: 'var(--cl-neutral-400)',
          500: 'var(--cl-neutral-500)',
          600: 'var(--cl-neutral-600)',
          700: 'var(--cl-neutral-700)',
          800: 'var(--cl-neutral-800)',
          900: 'var(--cl-neutral-900)'
        },
        white: 'var(--cl-white)'
      }
    }
  }
}
