import stylisticPlugin from '@stylistic/eslint-plugin';

const variables = {
  'no-delete-var': 'error',
  'no-undef': 'error',
  'no-undef-init': 'warn',
  'no-use-before-define': 'error',
};

const possibleErrors = {
  'no-await-in-loop': 'warn',
  'no-cond-assign': ['warn', 'except-parens'],
  'no-dupe-args': 'warn',
  'no-dupe-keys': 'warn',
  'no-empty': 'warn',
  'no-empty-pattern': 'warn',
  'no-extra-boolean-cast': 'warn',
  '@stylistic/no-extra-parens': [
    'warn',
    'all',
    {
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false,
      ignoreJSX: 'all',
    },
  ],
  '@stylistic/no-extra-semi': 'warn',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-obj-calls': 'warn',
  'no-regex-spaces': 'warn',
  'no-unsafe-finally': 'warn',
};

const bestPractices = {
  'array-callback-return': 'warn',
  curly: ['warn', 'all'],
  '@stylistic/dot-location': ['warn', 'property'],
  'dot-notation': [
    'warn',
    {allowPattern: '^[a-z0-9]*_[_a-z0-9]*$'},
  ],
  eqeqeq: ['error', 'smart'],
  'no-async-promise-executor': 'warn',
  'no-caller': 'warn',
  'no-console': 'off',
  'no-else-return': ['error', {allowElseIf: true}],
  'no-empty-function': 'warn',
  'no-empty-pattern': 'warn',
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-lone-blocks': 'warn',
  'no-loop-func': 'warn',
  '@stylistic/no-multi-spaces': [
    'warn',
    {exceptions: {VariableDeclarator: true}},
  ],
  'no-multi-str': 'warn',
  'no-new-wrappers': 'error',
  'no-param-reassign': [
    'error',
    {props: false},
  ],
  'no-promise-executor-return': 'warn',
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unreachable': 'error',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
    },
  ],
  'no-unused-vars': 'off',
  'no-useless-escape': 'warn',
  'no-useless-return': 'warn',
  'no-void': 'error',
  'no-with': 'warn',
  'prefer-promise-reject-errors': [
    'warn',
    {allowEmptyReject: true},
  ],
  'require-atomic-updates': 'warn',
  '@stylistic/wrap-iife': ['error', 'any'],
  yoda: ['warn', 'never'],
};

const stylistic = {
  '@stylistic/array-bracket-newline': ['warn', 'consistent'],
  '@stylistic/array-bracket-spacing': ['warn', 'never'],
  '@stylistic/array-element-newline': ['warn', 'consistent'],
  '@stylistic/brace-style': 'warn',
  camelcase: 'off',
  '@stylistic/comma-dangle': [
    'warn',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'ignore',
      exports: 'ignore',
      functions: 'ignore',
    },
  ],
  '@stylistic/comma-spacing': ['error', {before: false, after: true}],
  '@stylistic/eol-last': 'warn',
  '@stylistic/func-call-spacing': ['warn', 'never'],
  'func-name-matching': 'warn',
  'func-style': ['warn', 'expression'],
  '@stylistic/function-paren-newline': ['warn', 'consistent'],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/indent': [
    'warn',
    2,
    {
      ignoreComments: true,
      MemberExpression: 0,
      ignoredNodes: ['TemplateLiteral'],
    },
  ],
  '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
  '@stylistic/key-spacing': [
    'warn',
    {
      beforeColon: false,
      afterColon: true,
    },
  ],
  '@stylistic/keyword-spacing': [
    'warn',
    {
      overrides: {
        if: {after: true},
        else: {after: true},
        for: {after: true},
        while: {after: true},
        do: {after: true},
        switch: {after: true},
        case: {after: true},
        return: {after: true},
        try: {after: true},
        catch: {after: true},
        typeof: {after: true},
      },
    },
  ],
  '@stylistic/linebreak-style': ['warn', 'unix'],
  'max-params': ['error', 5],

  '@stylistic/multiline-ternary': 'off',
  'new-cap': [
    'warn',
    {newIsCap: true},
  ],
  '@stylistic/new-parens': 'warn',
  'no-array-constructor': 'warn',
  'no-lonely-if': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
  '@stylistic/no-multiple-empty-lines': 'warn',
  'no-new-object': 'warn',
  'no-nested-ternary': 'warn',
  '@stylistic/no-trailing-spaces': 'warn',
  'no-underscore-dangle': [
    'warn',
    {
      allow: ['_this', '_id', '_value', '__raw__sectionsSchema'],
      allowAfterThis: true,
      enforceInMethodNames: false,
    },
  ],
  'no-unneeded-ternary': 'warn',
  '@stylistic/no-whitespace-before-property': 'warn',
  '@stylistic/operator-linebreak': ['warn', 'after'],
  '@stylistic/padding-line-between-statements': [
    'warn',
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },
    {
      blankLine: 'any',
      prev: 'const',
      next: 'return',
    },
    {
      blankLine: 'always',
      prev: 'import',
      next: '*',
    },
    {
      blankLine: 'any',
      prev: 'import',
      next: 'import',
    },
  ],
  'one-var': [
    'warn',
    {initialized: 'never'},
  ],
  '@stylistic/quote-props': [
    'warn',
    'as-needed',
  ],
  '@stylistic/newline-per-chained-call': [
    'warn',
    {ignoreChainWithDepth: 3},
  ],
  '@stylistic/object-curly-newline': [
    'warn',
    {consistent: true},
  ],
  '@stylistic/object-curly-spacing': [
    'warn',
    'never',
  ],
  '@stylistic/quotes': [
    'warn',
    'single',
  ],
  '@stylistic/semi': [
    'error',
    'always',
  ],
  '@stylistic/semi-spacing': 'warn',
  '@stylistic/space-before-blocks': ['warn', 'always'],
  '@stylistic/space-before-function-paren': [
    'warn',
    {anonymous: 'never', named: 'never', asyncArrow: 'never', catch: 'always'},
  ],
  '@stylistic/space-in-parens': [
    'warn',
    'never',
  ],
  '@stylistic/space-infix-ops': 'warn',
  '@stylistic/space-unary-ops': [
    'warn',
    {
      words: false,
      nonwords: false,
    },
  ],
  '@stylistic/spaced-comment': [
    'warn',
    'always',
    {
      markers: ['!'],
      exceptions: ['*', '-', '+'],
    },
  ],

};

const es5Rules = Object.assign(
  {},
  variables,
  possibleErrors,
  bestPractices,
  stylistic
);

export default [
  {
    name: 'kswedberg/ignores',
    ignores: [
      'gitignore/**/*',
    ],
  },

  {
    name: 'kswedberg/es5',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...es5Rules,
    },
  },
];
