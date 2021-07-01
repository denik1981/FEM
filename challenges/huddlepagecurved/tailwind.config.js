const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html'],
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  theme: {
    screens: {
      xs: '440px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans],
        display: ['var(--ff-display)', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '3xs': ['0.4rem', '1.6'],
        '2xs': ['0.5rem', '1.5'],
        '1xs': ['0.625rem', '1.5'],
        ...defaultTheme.fontSize
      },
      colors: {
        primary: {
          '000': 'var(--cl-primary-000)',
          100: 'var(--cl-primary-100)',
          400: 'var(--cl-primary-400)',
          300: 'var(--cl-primary-300)',
          500: 'var(--cl-primary-500)',
          600: 'var(--cl-primary-600)',
          700: 'var(--cl-primary-700)',
          800: 'var(--cl-primary-800)',
          900: 'var(--cl-primary-900)',
          200: 'var(--cl-primary-200)'
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
          900: 'var(--cl-accent-900)'
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
        }
      }

    }
  }
}
