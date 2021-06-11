const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './index.ejs',
    './src/**/*.html',
    './src/**/*.ejs'
  ],
  important: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        desktop: '60% 40%'
      },
      colors: {
        primary: '#6648b1'
      },
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        fluidh: 'clamp(1.2rem, 5vw, 2rem)'
      },
      backgroundImage: () => ({
        myHeroDesktop: "url('~assets/bg-desktop.svg')",
        myHeroMobile: "url('~assets/bg-mobile.svg')"
      }),
      maxWidth: {
        '20ch': '20ch'
      },
      boxShadow: {
        btn: '0 7px 5px -2px rgba(0,0,0,0.3)'
      },
      outline: {
        magenta: ['1px dashed #22183A', '6px']
      }
    }
  },
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      scale: ['active', 'focus'],
      boxShadow: ['active'],
      ringWidth: ['active'],
      fontWeight: ['hover'],
      transitionProperty: ['hover', 'active']

    }
  }
}
