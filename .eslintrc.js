module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  // eslint-disable-next-line prettier/prettier
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    //   // "ecmaFeatures": {
    //   //   "jsx": true
    //   // },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // add your custom rules here
  rules: {
    'linebreak-style': ['error', 'unix'],

    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'generator-star-spacing': 'off',
    'no-console': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    // react
    // "react/no-set-state": "error",
    // "react/prop-types": 0,
    // vue
    'vue/html-closing-bracket-newline': 'off',
  },
}
