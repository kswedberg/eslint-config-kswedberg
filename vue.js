// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./index.js');
const {vue} = require('./rulesets');

Object.assign(config.rules, vue);

module.exports = Object.assign(config, {
  extends: [
    'plugin:vue/essential',
  ],
  plugins: [
    'vue',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
});
