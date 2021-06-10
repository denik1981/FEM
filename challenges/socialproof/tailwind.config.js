const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.ejs'],
  // important: false,
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: 'hsl(300, 43%, 22%)', light: 'hsl(303, 10%, 53%)' },
        secondary: 'hsl(333, 80%, 67%)',
        neutral: 'hsl(300, 24%, 96%)',
      },
      fontFamily: {
        primary: ['Spartan', ...defaultTheme.fontFamily.sans],
      },
      // gridTemplateColumns: {
      // desktop: '60% 40%',
      // },

      // fontSize: {
      //   fluidh: 'clamp(1.2rem, 5vw, 2rem)',
      // },
      // backgroundImage: () => ({
      // myHeroDesktop: "url('~assets/bg-desktop.svg')",
      // myHeroMobile: "url('~assets/bg-mobile.svg')",
      // }),
      // maxWidth: {
      // '20ch': '20ch',
      // },
      // boxShadow: {
      // btn: '0 7px 5px -2px rgba(0,0,0,0.3)',
      // },
      // outline: {
      // magenta: ['1px dashed #22183A', '6px'],
      // },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      scale: ['active', 'focus'],
      boxShadow: ['active'],
      ringWidth: ['active'],

    },
  },
};
