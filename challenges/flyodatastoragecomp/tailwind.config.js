const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html'],
  variants: {
    extend: {
      textColor: ['hover', 'focus', 'active'],
      backgroundColor: ['hover', 'active'],
      outline: ['hover']
    }
  },

  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        midtone: {
          100: 'var(--cl-midtone-100)',
          200: 'var(--cl-midtone-200)',
          700: 'var(--cl-midtone-700)'
        },
        accent: {
          100: 'var(--cl-accent-100)',
          500: 'var(--cl-accent-500)'
        },
        neutral: {
          500: 'var(--cl-neutral-500)'
        },
        shadow: {
          100: 'var(--cl-shadow-100)'
        },
        highlight: {
          900: 'var(--cl-highlight-900)'
        },
        black: 'var(--cl-black)',
        white: 'var(--cl-white)'
      }
    }
  }
}
