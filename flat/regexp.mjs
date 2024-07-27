import * as regexpPlugin from 'eslint-plugin-regexp';

export default [
  {
    name: 'kswedberg/regexp-plugin',
    plugins: {regexp: regexpPlugin},
    rules: {
      ...regexpPlugin.configs['flat/recommended'].rules,
      'regexp/prefer-d': 'off',
    },
  },
];
