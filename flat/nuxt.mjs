import {nuxtGlobals} from './globals.mjs';
import vueConfig from './vue.mjs';

export default [
  ...vueConfig,
  {
    name: 'kswedberg/ts',
    files: ['**/*.{ts,tsx,vue}'],
    ignores: ['src/**/index.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
