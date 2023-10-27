const rulesets = require('./rulesets.js');
const rules = Object.assign(
  {},
  rulesets.variables,
  rulesets.possibleErrors,
  rulesets.es6,
  rulesets.bestPractices,
  rulesets.stylistic
);

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {impliedStrict: true},
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  plugins: [
    '@stylistic',
  ],
  rules: rules,
};
