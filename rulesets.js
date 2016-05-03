module.exports.stylistic = {
  'array-bracket-spacing': [
    1,
    'never'
  ],
  'brace-style': 1,
  camelcase: 1,
  'eol-last': 1,
  'func-style': [
    1,
    'expression'
  ],
  indent: [
    1,
    2
  ],
  'jsx-quotes': [
    1,
    'prefer-single'
  ],
  'key-spacing': [
    1,
    {
      afterColon: true
    }
  ],
  'keyword-spacing': [
    1,
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
    2,
    'unix'
  ],
  'max-params': [
    1,
    5
  ],
  'new-cap': 1,
  'no-array-constructor': 2,
  'no-lonely-if': 1,
  'no-mixed-spaces-and-tabs': [
    1,
    'smart-tabs'
  ],
  'no-multiple-empty-lines': 2,
  'no-trailing-spaces': 1,
  'no-underscore-dangle': [
    1,
    {
      allow: ['_this'],
      allowAfterThis: true
    }
  ],
  'no-unneeded-ternary': 1,
  'no-whitespace-before-property': 1,
  'one-var': [
    1,
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
  'newline-after-var': 1,
  'newline-before-return': 1,
  'newline-per-chained-call': 1,

  quotes: [
    1,
    'single'
  ],
  semi: [
    2,
    'always'
  ],
  'space-before-blocks': [
    1,
    'always'
  ],
  'space-before-function-paren': [
    1,
    'never'
  ],
  'space-in-parens': [
    1,
    'never'
  ],
  'space-infix-ops': 1,
  'space-unary-ops': [
    2,
    {
      words: false,
      nonwords: false
    }
  ],

  'spaced-comment': [
    1,
    'always',
    {
      markers: ['!'],
      exceptions: ['*', '-', '+']
    }
  ],

};

module.exports.bestPractices = {
  curly: [
    2,
    'all'
  ],
  'dot-notation': [
    2,
    {
      allowPattern: '^[a-z]*_[_a-z]*$'
    }
  ],
  'no-caller': 2,
  'no-eq-null': 0,
  'no-invalid-this': 0,
  'no-multi-str': 2,
  'no-with': 2,
  'wrap-iife': 1,
  yoda: [
    2,
    'never'
  ],
};

module.exports.variables = {
  'no-delete-var': 2,
  'no-undef': 2,
  'no-use-before-define': 2,
};
var possibleErrors = {
  'no-cond-assign': [
    2,
    'except-parens'
  ],
  'no-empty': 2,
};

module.exports.es6 = {
  'no-class-assign': 2,
  'no-const-assign': 2,
  'no-duplicate-imports': 2,
  'no-this-before-super': 2
};
