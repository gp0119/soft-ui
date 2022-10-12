module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],

  plugins: ['vue', '@typescript-eslint'],

  rules: {
    // vue
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    '@typescript-eslint/consistent-type-imports': 1,
  },
}
