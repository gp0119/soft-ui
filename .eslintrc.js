module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],

  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // vue
    "vue/no-v-html": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "never",
          component: "always",
        },
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 3,
        multiline: 1,
      },
    ],
    "vue/require-default-prop": "off",
    "vue/html-closing-bracket-spacing": "error",
  },
};
