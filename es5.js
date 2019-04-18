const rulesets = require('./rulesets');
const rules = Object.assign(
  {},
  rulesets.variables,
  rulesets.possibleErrors,
  rulesets.bestPractices,
  rulesets.stylistic
);

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  globals: {
    FM: true,
    Modernizr: false,
  },

  rules: rules,
};
