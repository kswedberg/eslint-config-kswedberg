
module.exports.variables = {
  'no-delete-var': 'error',
  'no-undef': 'error',
  'no-use-before-define': 'error',
};

module.exports.possibleErrors = {
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
  'arrow-body-style': [
    'error',
    'always'
  ],
  'no-class-assign': 'warn',
  'no-const-assign': 'warn',
  'no-duplicate-imports': 'warn',
  'no-this-before-super': 'warn',
  'no-confusing-arrow': 'error',
};

module.exports.bestPractices = {
  curly: [
    'warn',
    'all'
  ],
  'dot-notation': [
    'warn',
    {
      allowPattern: '^[a-z]*_[_a-z]*$'
    }
  ],
  'no-caller': 'warn',
  'no-eq-null': 'off',
  'no-invalid-this': 'off',
  'no-multi-str': 'warn',
  'no-with': 'warn',
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
  'array-bracket-spacing': [
    'warn',
    'never'
  ],
  'brace-style': 'warn',
  camelcase: 'warn',
  'eol-last': 'warn',
  'func-style': [
    'warn',
    'expression'
  ],
  indent: [
    'warn',
    2
  ],
  'jsx-quotes': [
    'warn',
    'prefer-single'
  ],
  'key-spacing': [
    'warn',
    {
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
  'max-params': [
    'error',
    5
  ],
  'new-cap': 'warn',
  'no-array-constructor': 'warn',
  'no-lonely-if': 'error',
  'no-mixed-spaces-and-tabs': [
    'warn',
    'smart-tabs'
  ],
  'no-multiple-empty-lines': 'warn',
  'no-trailing-spaces': 'warn',
  'no-underscore-dangle': [
    'warn',
    {
      allow: ['_this'],
      allowAfterThis: true
    }
  ],
  'no-unneeded-ternary': 'error',
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
    {
      keywords: true
    }
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
