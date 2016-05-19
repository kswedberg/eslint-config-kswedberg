var rulesets = require('./rulesets');
var rules = Object.assign(
  {},
  rulesets.variables,
  rulesets.possibleErrors,
  rulesets.es6,
  rulesets.bestPractices,
  rulesets.stylistic
);

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    }
  },
  plugins: [
    'react'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    FM: true,
    Modernizr: false
  },

  rules: rules
};
