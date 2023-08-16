//https://www.inflearn.com/questions/626182/nuxt-3-%EC%97%90%EC%84%9C-eslint-prettier-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  //script setup에서 async없이 await써도 eslint error 안생김.
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debug': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
