import stylisticPlugin from '@stylistic/eslint-plugin';

const variables = {
  'no-delete-var': 'error',
  // 'no-undef': 'error',
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
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-obj-calls': 'warn',
  'no-regex-spaces': 'warn',
  'no-unsafe-finally': 'warn',
};

const es6 = {
  'arrow-body-style': 'off',
  'no-class-assign': 'warn',
  'no-const-assign': 'error',
  'no-import-assign': 'warn',
  'no-duplicate-imports': 'warn',
  'no-this-before-super': 'warn',
  'no-useless-computed-key': 'warn',
  'no-useless-concat': 'warn',
  'no-useless-rename': 'warn',
  'no-var': 'error',
  'prefer-arrow-callback': 'warn',
  'prefer-rest-params': 'warn',
  'prefer-spread': 'warn',
  'prefer-template': 'warn',
  'require-await': 'warn',
  'no-new-native-nonconstructor': 'warn',
  '@stylistic/arrow-spacing': 'warn',
  '@stylistic/arrow-parens': ['warn', 'always'],
  '@stylistic/no-confusing-arrow': ['error', {allowParens: true}],
  '@stylistic/rest-spread-spacing': ['warn', 'never'],
  '@stylistic/template-curly-spacing': ['warn', 'never'],

};

const bestPractices = {
  'array-callback-return': 'warn',
  curly: ['warn', 'all'],
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
  yoda: ['warn', 'never'],
};

const stylistic = {
  camelcase: 'off',
  'func-name-matching': 'warn',
  'func-style': ['warn', 'expression'],
  'max-params': ['error', 5],

  'new-cap': [
    'warn',
    {newIsCap: true},
  ],
  'no-array-constructor': 'warn',
  'no-lonely-if': 'error',
  'no-object-constructor': 'warn',
  'no-nested-ternary': 'warn',
  'no-underscore-dangle': [
    'warn',
    {
      allow: ['_this', '_id', '_value', '__raw__sectionsSchema'],
      allowAfterThis: true,
      enforceInMethodNames: false,
    },
  ],
  'no-unneeded-ternary': 'warn',
  'one-var': [
    'warn',
    {initialized: 'never'},
  ],

  // @stylistic:
  '@stylistic/array-bracket-newline': ['warn', 'consistent'],
  '@stylistic/array-bracket-spacing': ['warn', 'never'],
  '@stylistic/array-element-newline': ['warn', 'consistent'],
  '@stylistic/brace-style': 'warn',
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
  '@stylistic/dot-location': ['warn', 'property'],
  '@stylistic/eol-last': 'warn',
  '@stylistic/function-call-spacing': ['warn', 'never'],
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
  '@stylistic/multiline-ternary': 'off',
  '@stylistic/new-parens': 'warn',
  '@stylistic/newline-per-chained-call': [
    'warn',
    {ignoreChainWithDepth: 3},
  ],

  '@stylistic/no-extra-parens': [
    'warn',
    'all',
    {
      nestedBinaryExpressions: false,
      ignoredNodes: ['ArrowFunctionExpression[body.type=ConditionalExpression]'],
      ignoreJSX: 'all',
    },
  ],
  '@stylistic/no-extra-semi': 'warn',
  '@stylistic/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
  '@stylistic/no-multi-spaces': [
    'warn',
    {exceptions: {VariableDeclarator: true}},
  ],
  '@stylistic/no-multiple-empty-lines': 'warn',
  '@stylistic/no-trailing-spaces': 'warn',
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
  '@stylistic/object-curly-newline': [
    'warn',
    {consistent: true},
  ],
  '@stylistic/object-curly-spacing': [
    'warn',
    'never',
  ],
  '@stylistic/quote-props': [
    'warn',
    'as-needed',
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
  '@stylistic/wrap-iife': ['error', 'any'],
};

const es6Rules = Object.assign(
  {},
  variables,
  possibleErrors,
  es6,
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
    name: 'kswedberg/js',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...es6Rules,
    },
  },
];
