const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html'],
  // plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  variants: {
    extend: {
      // backgroundColor: ['hover', 'focus', 'active'],
      // textDecoration: ['hover', 'focus', 'active'],
      // fontWeight: ['hover', 'focus', 'active'],
      // borderWidth: ['hover', 'focus', 'active'],
      // borderRadius: ['hover', 'focus', 'active'],
      // ringWidth: ['hover', 'focus', 'active'],
      // ringOffsetWidth: ['hover', 'focus', 'active'],
      // dropShadow: ['hover', 'focus', 'active'],
      // boxShadow: ['hover', 'focus', 'active'],
      // saturate: ['group-hover', 'hover', 'focus', 'active'],
      // textColor: ['group-hover', 'hover', 'focus', 'active'],
      // padding: ['group-hover', 'hover', 'focus', 'active']
    }
  },

  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      // fontSize: {
      //   // '3xs': ['0.4rem', '1.625'],
      //   // '2xs': ['0.6rem', '1.625'],
      //   // ...defaultTheme.fontSize
      // },
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans],
        display: ['var(--ff-display)', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        midtone: {
          100: 'var(--cl-midtone-100)',
          200: 'var(--cl-midtone-200)',
          700: 'var(--cl-midtone-700)'
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
