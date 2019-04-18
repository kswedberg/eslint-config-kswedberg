// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue

const rulesets = require('./rulesets');
const rules = Object.assign(
  {},
  rulesets.variables,
  rulesets.possibleErrors,
  rulesets.es6,
  rulesets.bestPractices,
  rulesets.stylistic,
  rulesets.vue,
);

module.exports = {
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: [
    'vue',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  rules: rules,
};
