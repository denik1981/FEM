module.exports = {
  plugins: [
    'removeComments',
    'removeTitle',
    'removeUselessStrokeAndFill',
    'cleanupAttrs',
    { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } }
  ]
}
