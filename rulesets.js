module.exports.variables = {
  'no-delete-var': 'error',
  'no-undef': 'error',
  'no-undef-init': 'warn',
  'no-use-before-define': 'error',
};

module.exports.possibleErrors = {
  'no-await-in-loop': 'warn',
  'no-cond-assign': ['warn', 'except-parens'],
  'no-dupe-args': 'warn',
  'no-dupe-keys': 'warn',
  'no-empty': 'warn',
  'no-empty-pattern': 'warn',
  'no-extra-boolean-cast': 'warn',
  'no-extra-parens': [
    'warn',
    'all',
    {
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
    },
  ],
  'no-extra-semi': 'warn',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-obj-calls': 'warn',
  'no-regex-spaces': 'warn',
  'no-unsafe-finally': 'warn',
};

module.exports.es6 = {
  'arrow-body-style': 'off',
  'arrow-spacing': 'warn',
  'arrow-parens': ['warn', 'always'],
  'no-class-assign': 'warn',
  'no-confusing-arrow': ['error', {allowParens: true}],
  'no-const-assign': 'error',
  'no-import-assign': 'warn',
  'no-duplicate-imports': 'warn',
  'no-return-await': 'warn',
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
  'rest-spread-spacing': ['warn', 'never'],
  'template-curly-spacing': ['warn', 'never'],
};

module.exports.bestPractices = {
  'array-callback-return': 'warn',
  curly: ['warn', 'all'],
  'dot-location': ['warn', 'property'],
  'dot-notation': [
    'warn',
    {allowPattern: '^[a-z0-9]*_[_a-z0-9]*$'},
  ],
  eqeqeq: ['error', 'smart'],
  'no-caller': 'warn',
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
  'no-multi-spaces': [
    'warn',
    {exceptions: {VariableDeclarator: true}},
  ],
  'no-multi-str': 'warn',
  'no-new-wrappers': 'error',
  'no-param-reassign': [
    'error',
    {props: false},
  ],
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
  'no-useless-escape': 'warn',
  'no-useless-return': 'warn',
  'no-void': 'error',
  'no-with': 'warn',
  'prefer-promise-reject-errors': [
    'warn',
    {allowEmptyReject: true},
  ],
  'wrap-iife': ['error', 'any'],
  yoda: ['warn', 'never'],
};

module.exports.stylistic = {
  'array-bracket-newline': ['warn', 'consistent'],
  'array-bracket-spacing': ['warn', 'never'],
  'array-element-newline': ['warn', 'consistent'],
  'brace-style': 'warn',
  camelcase: ['warn', {
    properties: 'never',
    ignoreDestructuring: true,
  }],
  'comma-dangle': [
    'warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'ignore',
    },
  ],
  'comma-spacing': ['error', {before: false, after: true}],
  'eol-last': 'warn',
  'func-call-spacing': ['warn', 'never'],
  'func-name-matching': 'warn',
  'func-style': ['warn', 'expression'],
  'function-paren-newline': ['warn', 'consistent'],
  'implicit-arrow-linebreak': ['error', 'beside'],
  indent: [
    'warn',
    2,
    {
      ignoreComments: true,
      MemberExpression: 0,
      ignoredNodes: ['TemplateLiteral'],
    },
  ],
  'jsx-quotes': ['warn', 'prefer-single'],
  'key-spacing': [
    'warn',
    {
      beforeColon: false,
      afterColon: true,
    },
  ],
  'keyword-spacing': [
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
  'linebreak-style': ['warn', 'unix'],
  'lines-around-directive': [
    'warn',
    {
      before: 'always',
      after: 'always',
    },
  ],
  'max-params': ['error', 5],
  'new-cap': [
    'warn',
    {newIsCap: true},
  ],
  'new-parens': 'warn',
  'no-array-constructor': 'warn',
  'no-lonely-if': 'error',
  'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
  'no-multiple-empty-lines': 'warn',
  'no-new-object': 'warn',
  'no-nested-ternary': 'warn',
  'no-trailing-spaces': 'warn',
  'no-underscore-dangle': [
    'warn',
    {
      allow: ['_this'],
      allowAfterThis: true,
      enforceInMethodNames: false,
    },
  ],
  'no-unneeded-ternary': 'warn',
  'no-whitespace-before-property': 'warn',
  'padding-line-between-statements': [
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
  'quote-props': ['warn', 'as-needed'],
  'newline-per-chained-call': [
    'warn',
    {ignoreChainWithDepth: 3},
  ],
  'object-curly-newline': ['warn', {minProperties: 4, multiline: true}],
  'object-curly-spacing': ['warn', 'never'],
  quotes: ['warn', 'single'],
  semi: ['error', 'always'],
  'semi-spacing': 'warn',
  'space-before-blocks': ['warn', 'always'],
  'space-before-function-paren': ['warn', 'never'],
  'space-in-parens': ['warn', 'never'],
  'space-infix-ops': 'warn',
  'space-unary-ops': [
    'warn',
    {
      words: false,
      nonwords: false,
    },
  ],

  'spaced-comment': [
    'warn',
    'always',
    {
      markers: ['!'],
      exceptions: ['*', '-', '+'],
    },
  ],

};

module.exports.vue = {
  'vue/attribute-hyphenation': 'off',
  'vue/html-self-closing': [
    'warn',
    {svg: 'any'},
  ],
  'vue/html-closing-bracket-newline': 'warn',
  'vue/html-indent': 'warn',
  'vue/max-attributes-per-line': [
    'warn', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    },
  ],
  'vue/multiline-html-element-content-newline': 'warn',
  'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/this-in-template': 'error',
  'vue/v-bind-style': 'warn',
  'vue/v-on-style': 'warn',
  'vue/v-on-function-call': ['warn', 'never'],
  'vue/attributes-order': [
    'error',
    {
      order: [
        [
          'CONDITIONALS',
          'DEFINITION',
          'LIST_RENDERING',
        ],
        [
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'RENDER_MODIFIERS',
          'CONTENT',
        ],
        'EVENTS',
        [
          'UNIQUE',
          'GLOBAL',
          'OTHER_ATTR',
        ],

      ],
    },
  ],
};
