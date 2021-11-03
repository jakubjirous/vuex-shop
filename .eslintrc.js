module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    quotes: ['error', 'single', { avoidEscape: false }],
    'object-curly-spacing': ['error', 'always'],
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
  },
};
