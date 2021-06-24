const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.ejs'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'var(--cl-orange)',
          cyan: { DEFAULT: 'var(--cl-cyan)', dark: 'var(--cl-cyan-dark)' }
        },
        white: {
          DEFAULT: 'var(--cl-white)',
          alpha75: 'var(--cl-white-alpha75)'
        }
      },
      fontFamily: {
        display: ['var(--ff-display)', ...defaultTheme.fontFamily.sans],
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: theme => ({
        sedans: 'var(--bg-icon-sedans)',
        suvs: 'var(--bg-icon-suvs)',
        luxury: 'var(--bg-icon-luxury)'
      })
    }
  }
}
