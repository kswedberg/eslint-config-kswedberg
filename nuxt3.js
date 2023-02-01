// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./vue3.js');
const {nuxt3Globals} = require('./globals.js');

module.exports = Object.assign(config, {
  overrides: [
    {
      files: '**/*.{vue,js}',
      globals: nuxt3Globals,
    },
  ],
});
