import globals from 'globals';
import stylisticPlugin from '@stylistic/eslint-plugin';
import {nuxtGlobals} from './globals.mjs';
import {es6Rules, vue, vue3} from './rulesets.mjs';

export default [
  {
    ignores: [
      'gitignore/**/*',
      'src/public/*.js',
    ],
  },
  {
    name: 'bamf/languageOptions',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...nuxtGlobals,
      },
    },
  },
  {
    name: 'bamf/js',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...es6Rules,
    },
  },
  {
    name: 'bamf/vue',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...vue,
      ...vue3,
    },
  },
  {
    name: 'bamf/ts',
    files: ['**/*.{ts,tsx,vue}'],
    ignores: ['src/**/index.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
