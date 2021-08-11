module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({ content: ['./*.html'] }),
    require('postcss-preset-env')
  ]
};
