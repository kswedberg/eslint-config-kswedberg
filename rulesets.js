
module.exports.variables = {
  'no-delete-var': 'error',
  'no-undef': 'error',
  'no-use-before-define': 'error',
};

module.exports.possibleErrors = {
  'no-await-in-loop': 'warn',
  'no-cond-assign': [
    'warn',
    'except-parens'
  ],
  'no-empty': 'warn',
  'no-extra-semi': 'warn',
  'no-inner-declarations': 'error',
  'no-obj-calls': 'warn',
};

module.exports.es6 = {
  'arrow-spacing': 'warn',
  'no-class-assign': 'warn',
  'no-confusing-arrow': 'error',
  'no-const-assign': 'error',
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
  'require-await': 'off',
  'rest-spread-spacing': [
    'warn',
    'never'
  ],
  'template-curly-spacing': [
    'warn',
    'never'
  ],
};

module.exports.bestPractices = {
  'array-callback-return': 'warn',
  curly: [
    'warn',
    'all'
  ],
  'dot-notation': [
    'warn',
    {
      allowPattern: '^[a-z0-9]*_[_a-z0-9]*$'
    }
  ],
  eqeqeq: ['error', 'smart'],
  'no-caller': 'warn',
  'no-else-return': ['error', { allowElseIf: true}],
  'no-empty-function': 'warn',
  'no-empty-pattern': 'warn',
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-lone-blocks': 'warn',
  'no-loop-func': 'warn',
  'no-multi-spaces': [
    'warn',
    {
      exceptions: {
        VariableDeclarator: true
      }
    }
  ],
  'no-multi-str': 'warn',
  'no-new-wrappers': 'error',
  'no-param-reassign': ['error', {
    props: true,
    ignorePropertyModificationsFor: [
      'acc', // for reduce accumulators
      'prev', // for reduce accumulators
      'previous', // for reduce accumulators
      'event', // for e.returnvalue
      'req', // for Express requests
      'request', // for Express requests
      'res', // for Express responses
      'response', // for Express responses
    ]
  }],
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-restricted-properties': ['error', {
    object: 'arguments',
    property: 'callee',
    message: 'arguments.callee is deprecated',
  }, {
    object: 'window',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'window',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    object: 'Math',
    property: 'pow',
    message: 'Use the exponentiation operator (**) instead.',
  }],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unreachable': 'error',
  'no-unused-expressions': ['error', {
    allowShortCircuit: false,
    allowTernary: false,
  }],
  'no-useless-escape': 'warn',
  'no-useless-return': 'warn',
  'no-void': 'error',
  'no-with': 'warn',
  'prefer-promise-reject-errors': [
    'warn',
    {
      allowEmptyReject: true
    }
  ],
  'wrap-iife': [
    'error',
    'any'
  ],
  yoda: [
    'warn',
    'never'
  ],
};

module.exports.stylistic = {
  'array-bracket-newline': ['warn', {multiline: true}],
  'array-element-newline': ['warn', {multiline: true}],
  'array-bracket-spacing': [
    'warn',
    'never'
  ],
  'brace-style': 'warn',
  camelcase: ['warn', {properties: never}],
  'comma-spacing': ['error', { before: false, after: true }],
  'eol-last': 'warn',
  'func-call-spacing': ['warn', 'never'],
  'func-style': [
    'warn',
    'expression'
  ],
  'id-blacklist': ['e'],
  'implicit-arrow-linebreak': ['error', 'beside'],
  indent: [
    'warn',
    2,
    {
      MemberExpression: 'off'
    }
  ],
  'jsx-quotes': [
    'warn',
    'prefer-single'
  ],
  'key-spacing': [
    'warn',
    {
      beforeColon: false,
      afterColon: true
    }
  ],
  'keyword-spacing': [
    'warn',
    {
      overrides: {
        'if': {
          after: true
        },
        'else': {
          after: true
        },
        'for': {
          after: true
        },
        'while': {
          after: true
        },
        'do': {
          after: true
        },
        'switch': {
          after: true
        },
        'case': {
          after: true
        },
        'return': {
          after: true
        },
        'try': {
          after: true
        },
        'catch': {
          after: true
        },
        'typeof': {
          after: true
        }
      }
    }
  ],
  'linebreak-style': [
    'warn',
    'unix'
  ],
  'around-directive': ['warn', {
    after: 'always',
  }],
  'max-params': [
    'error',
    5
  ],
  'new-cap': [
    'warn',
    {
      newIsCap: true
    }
  ],
  'new-parens': 'warn',
  'no-array-constructor': 'warn',
  'no-lonely-if': 'error',
  'no-mixed-spaces-and-tabs': [
    'warn',
    'smart-tabs'
  ],
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
    }
  ],
  'no-unneeded-ternary': 'warn',
  'no-whitespace-before-property': 'warn',
  'one-var': [
    'warn',
    {
      initialized: 'never'
    }
  ],
  'quote-props': [
    'warn',
    'as-needed',
  ],
  'newline-after-var': 'warn',
  'newline-before-return': 'warn',
  'newline-per-chained-call': [
    'warn',
    {
      ignoreChainWithDepth: 3
    }
  ],
  'object-curly-spacing': [
    'warn',
    'never'
  ],
  quotes: [
    'warn',
    'single'
  ],
  semi: [
    'error',
    'always'
  ],
  'semi-spacing': 'warn',
  'space-before-blocks': [
    'warn',
    'always'
  ],
  'space-before-function-paren': [
    'warn',
    'never'
  ],
  'space-in-parens': [
    'warn',
    'never'
  ],
  'space-infix-ops': 'warn',
  'space-unary-ops': [
    'warn',
    {
      words: false,
      nonwords: false
    }
  ],

  'spaced-comment': [
    'warn',
    'always',
    {
      markers: ['!'],
      exceptions: ['*', '-', '+']
    }
  ],

};
