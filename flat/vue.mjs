import js from './js.mjs';

export default [
  ...js,
  {
    name: 'kswedberg/vue',
    rules: {
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
      'vue/component-definition-name-casing': 'off',
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
      'vue/valid-model-definition': 'warn',
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
      'vue/v-on-style': 'warn',
      'vue/valid-next-tick': 'warn',
      'vue/block-order': [
        'warn', {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/attributes-order': [
        'warn',
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
      'vue/v-on-handler-style': ['off'],
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-mutating-props': ['warn', {shallowOnly: true}],
    },
  },
];
