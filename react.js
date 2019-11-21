const rulesets = require('./rulesets');
const config = require('./index.js');

config.parserOptions.ecmaFeatures = {
  jsx: true,
  impliedStrict: true,
};

module.exports = Object.assign(config, {
  plugins: [
    'react',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
});
