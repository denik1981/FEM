const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: false,
  theme: {
    extend: {
      colors: {
        myViolet: '#6648B1',
      },
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: () => ({
        myHeroDesktop: "url('~assets/bg-desktop.svg')",
        myHeroMobile: "url('~assets/bg-mobile.svg')",
      }),
      maxWidth: {
        '20ch': '20ch',
      },
      screens: {
        xs: '380px',
        ...defaultTheme.screens,
      },
    },
  },
};
