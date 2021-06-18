const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.ejs'],
  theme: {
    extend: {
      // colors: {
      //   primary: { DEFAULT: 'var(--cl-primary)', light: 'var(--cl-primary-light)' },
      //   secondary: { DEFAULT: 'var(--cl-secondary)' },
      //   neutral: { DEFAULT: 'var(--cl-neutral)', light: 'var(--cl-neutral-light)' }
      // },
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
