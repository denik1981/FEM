const defaultTheme = require('tailwindcss/defaultTheme');
const customBreakpoints = { xs: '480px' };
module.exports = {
  purge: ['./index.html'],
  variants: { extend: {} },
  theme: {
    screens: {
      ...customBreakpoints,
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: { primary: ['var(--ff-primary)', ...defaultTheme.fontFamily.sans] }
    }
  }
};
