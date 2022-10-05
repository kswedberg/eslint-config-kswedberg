// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./index.js');
const {vue} = require('./rulesets.js');

Object.assign(config.rules, vue);

module.exports = Object.assign(config, {
  extends: [
    'plugin:vue/essential',
  ],
  plugins: [
    'vue',
  ],
  env: {
    node: true,
    es6: true,
  },
});
