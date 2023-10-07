// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./vue3.js');
const {nuxt3Globals} = require('./globals.js');

const nuxt3Rules = {
  '@typescript-eslint/no-unused-vars': 'off',
};

if (config.rules['no-undef']) {
  delete config.rules['no-undef'];
}

Object.assign(config.rules, nuxt3Rules);
Object.assign(config.parserOptions, {
  parser: {
    js: 'espree',
  },
});

module.exports = Object.assign(config, {
  overrides: [
    {
      files: '**/*.{vue,js,mjs,ts}',
      globals: nuxt3Globals,
    },
  ],
});
