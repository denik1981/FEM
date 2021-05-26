const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: false,
  theme: {
    extend: {
      colors: {
        primary: '#6648b1',
      },
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        fluid: 'clamp(1.3rem, 2.5vw , 2rem)',
      },
      backgroundImage: () => ({
        myHeroDesktop: "url('~assets/bg-desktop.svg')",
        myHeroMobile: "url('~assets/bg-mobile.svg')",
      }),
      maxWidth: {
        '20ch': '20ch',
      },
      boxShadow: {
        btn: '0 10px 5px -2px rgba(0,0,0,0.3)',
      },
      gridTemplateRows: {
        desktop: '5rem auto 3rem',
      },
      screens: {
        xs: '380px',
        ...defaultTheme.screens,
      },
    },
  },
};
