module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  plugins: [
    'html',
    'vue'
  ],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0
  }
 }
