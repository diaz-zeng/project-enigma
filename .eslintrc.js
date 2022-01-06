/*
 * @Date: 2022-01-05 17:45:57
 * @LastEditors: 曾令宇
 * @LastEditTime: 2022-01-06 11:02:03
 * @FilePath: /project-enigma/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies':'off'
  },
};
