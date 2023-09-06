// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./vue3.js');
const {nuxt3Globals} = require('./globals.js');

if (config.rules['no-undef']) {
  delete config.rules['no-undef'];
}

module.exports = Object.assign(config, {
  overrides: [
    {
      files: '**/*.{vue,js,mjs,ts}',
      globals: nuxt3Globals,
    },
  ],
});
