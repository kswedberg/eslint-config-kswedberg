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
      enforceForArrowConditionals: false,
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
  'wrap-iife': ['error', 'any'],
  yoda: ['warn', 'never'],
};

module.exports.stylistic = {
  'array-bracket-newline': ['warn', 'consistent'],
  'array-bracket-spacing': ['warn', 'never'],
  'array-element-newline': ['warn', 'consistent'],
  'brace-style': 'warn',
  camelcase: 'off',
  'comma-dangle': [
    'warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'ignore',
      exports: 'ignore',
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
  'multiline-ternary': 'off',
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
      allow: ['_this', '_id', '_value', '__raw__sectionsSchema'],
      allowAfterThis: true,
      enforceInMethodNames: false,
    },
  ],
  'no-unneeded-ternary': 'warn',
  'no-whitespace-before-property': 'warn',
  'operator-linebreak': ['warn', 'after'],
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
  'object-curly-newline': ['warn', {consistent: true}],
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
  'vue/array-bracket-newline': ['warn', 'consistent'],
  'vue/array-bracket-spacing': ['warn', 'never'],
  'vue/attribute-hyphenation': 'off',
  'vue/brace-style': 'warn',
  'vue/comma-dangle': [
    'warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',

      functions: 'ignore',
    },
  ],
  'vue/comma-spacing': ['error', {before: false, after: true}],
  'vue/custom-event-name-casing': 'off',
  'vue/dot-location': ['warn', 'property'],
  'vue/eqeqeq': ['error', 'smart'],

  'vue/first-attribute-linebreak': 'warn',
  'vue/html-button-has-type': 'warn',
  'vue/html-closing-bracket-spacing': 'warn',
  'vue/html-closing-bracket-newline': 'warn',
  'vue/html-comment-content-spacing': 'warn',
  'vue/html-indent': [
    'warn',
    2,
    {
      alignAttributesVertically: false,
    },
  ],
  'vue/html-quotes': 'warn',
  'vue/html-self-closing': [
    'warn',
    {svg: 'any'},
  ],
  'vue/max-attributes-per-line': [
    'warn', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    },
  ],
  // 'vue/mustache-interpolation-spacing': 'warn',
  'vue/multiline-html-element-content-newline': 'warn',
  'vue/next-tick-style': ['warn', 'promise'],
  'vue/no-child-content': 'warn',
  'vue/no-duplicate-attr-inheritance': 'warn',
  'vue/no-invalid-model-keys': 'warn',
  'vue/no-lone-template': 'error',
  'vue/no-multi-spaces': 'warn',
  'vue/no-potential-component-option-typo': [
    'error', {
      presets: ['vue', 'nuxt'],
    },
  ],
  'vue/no-reserved-component-names': 'warn',
  'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
  'vue/no-static-inline-styles': 'warn',
  'vue/no-template-shadow': 'warn',
  'vue/no-template-target-blank': 'warn',
  'vue/no-use-computed-property-like-method': 'warn',
  'vue/no-useless-concat': 'warn',
  'vue/prop-name-casing': 'warn',
  'vue/require-default-prop': 'warn',
  'vue/require-prop-types': 'warn',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/this-in-template': 'error',
  'vue/v-bind-style': 'warn',
  'vue/v-on-function-call': ['warn', 'never'],
  'vue/v-on-style': 'warn',
  'vue/valid-next-tick': 'warn',

  'vue/component-tags-order': ['error', {
    order: ['template', 'script', 'style'],
  }],
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
  'vue/multi-word-component-names': 'off',
  'vue/order-in-components': [
    'warn', {
      order: [
        'el',
        'name',
        'inheritAttrs',
        'layout',

        'setup',

        ['extends', 'provide', 'inject', 'propsData'],

        ['key', 'parent', 'functional', 'delimiters', 'comments'],
        ['asyncData', 'fetch'],
        'fetchOnServer',
        ['components', 'directives', 'filters'],
        ['mixins', 'props'],
        'model',
        'data',
        'computed',

        'middleware',
        'validate',

        'scrollToTop',
        'transition',
        'loading',

        'emits',
        'head',

        'watchQuery',
        'watch',

        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    },
  ],
};
