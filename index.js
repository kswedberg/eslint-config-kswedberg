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
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      generators: false,
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  globals: {
    Modernizr: false
  },

  rules: rules
};
