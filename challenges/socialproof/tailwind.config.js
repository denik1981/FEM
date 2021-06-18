const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.ejs'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--cl-primary)', light: 'var(--cl-primary-light)' },
        secondary: { DEFAULT: 'var(--cl-secondary)' },
        neutral: { DEFAULT: 'var(--cl-neutral)', light: 'var(--cl-neutral-light)' }
      },
      fontFamily: {
        primary: ['Spartan', ...defaultTheme.fontFamily.sans]
      }
      // backgroundImage: () => ({
      // myHeroDesktop: "url('~assets/bg-desktop.svg')",
      // myHeroMobile: "url('~assets/bg-mobile.svg')",
      // }),
    }
  },
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      scale: ['active', 'focus'],
      boxShadow: ['active'],
      ringWidth: ['active']

    }
  }
}
