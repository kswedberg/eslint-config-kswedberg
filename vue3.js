// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./index.js');
const {vue} = require('./rulesets.js');

// Remove deprecated rule and replace with new one
const {'vue/v-on-function-call': onFnCall, ...vue2} = vue;
const vue3 = {
  'vue/v-on-handler-style': [
    'warn',
    ['method', 'inline'],
  ],
};

Object.assign(config.rules, vue2, vue3);

module.exports = Object.assign(config, {
  extends: [
    'plugin:vue/vue3-essential',
  ],
  plugins: [
    'vue',
  ],
  env: {
    node: true,
    es6: true,
  },
});
