const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.ejs'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'var(--cl-red)',
          cyan: 'var(--cl-cyan)',
          orange: 'var(--cl-orange)',
          blue: 'var(--cl-blue)'
        },
        neutral: {
          300: 'var(--cl-neutral-300)',
          600: 'var(--cl-neutral-600)'
        }
      },
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: theme => ({
        supervisor: 'var(--bg-icon-supervisor)',
        teambuilder: 'var(--bg-icon-teambuilder)',
        karma: 'var(--bg-icon-karma)',
        calculator: 'var(--bg-icon-calculator)'
      })
    }
  }
}
