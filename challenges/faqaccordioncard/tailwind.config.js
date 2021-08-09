const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html'],
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
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
      }
    }
  }
}
