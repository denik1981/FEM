const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.ejs'],
  theme: {
    extend: {
      colors: {
        primary: {
          '500a': 'var(--cl-primary-500a)',
          '500b': 'var(--cl-primary-500b)',
          '600': 'var(--cl-primary-600)',
          '900': 'var(--cl-primary-900)',
        },      
        accent: 'var(--cl-accent)',
        neutral: {
          '600': 'var(--cl-neutral-600)',
          '900': 'var(--cl-neutral-900)'
        }
      },
      fontFamily: {
        primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans]
      },
    }
  }
}
