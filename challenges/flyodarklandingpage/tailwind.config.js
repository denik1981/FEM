const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html'],
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
  variants: {
    extend: {
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
      fontSize: {
        xs: ['12px', '1'],
        ...defaultTheme.fontSize
      }
    }
  }
}
