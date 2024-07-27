import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unicornRules from './unicorn-rules.mjs';

export default [
  {
    name: 'kswedberg/unicorn-plugin',
    plugins: {unicorn: eslintPluginUnicorn},
    rules: {unicorn: unicornRules},
  },
];
