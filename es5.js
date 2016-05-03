var rulesets = require('./rulesets');
var rules = Object.assign(
  {},
  rulesets.variables,
  rulesets.possibleErrors,
  rulesets.bestPractices,
  rulesets.stylistic
);

module.exports = {
  parserOptions: {
    ecmaVersion: 5
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    FM: true,
    Modernizr: false
  },

  rules: rules
};
