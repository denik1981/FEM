module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-console': 1,
    'prettier/prettier': 2,
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }]
  },
  plugins: ['prettier']
};
