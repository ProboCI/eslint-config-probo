module.exports = {
  'rules': {
    'space-before-function-paren': [
      2,
      {
        'named': 'never',
        'anonymous': 'never'
      }
    ],
    'one-var': [
      2,
      'never'
    ],
    'no-lone-blocks': 2,
    'no-shadow-restricted-names': 2,
    'no-extend-native': 2,
    'quotes': [
      2,
      'single'
    ],
    'lines-around-comment': [
      2,
      {
        'beforeBlockComment': true,
        'afterBlockComment': false
      }
    ],
    'no-native-reassign': 2,
    'block-scoped-var': 2,
    'no-unused-expressions': 2,
    'linebreak-style': [
      2,
      'unix'
    ],
    'no-eval': 2,
    'comma-spacing': 2,
    'eol-last': 2,
    'no-nested-ternary': 2,
    'curly': [
      2,
      'multi-line'
    ],
    'camelcase': [
      2,
      {
        'properties': 'never'
      }
    ],
    'no-undefined': 2,
    'valid-jsdoc': [
      1,
      {
        'requireReturn': false,
        'prefer': {
          'returns': 'return'
        }
      }
    ],
    'no-unused-vars': [
      2,
      {
        'args': 'none',
        'vars': 'all'
      }
    ],
    'no-array-constructor': 2,
    'space-after-keywords': [
      2,
      'always'
    ],
    'strict': [
      2,
      'global'
    ],
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-process-exit': 2,
    'no-use-before-define': [
      2,
      'nofunc'
    ],
    'no-new-func': 2,
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'quote-props': [
      2,
      'consistent-as-needed'
    ],
    'comma-dangle': [
      2,
      'always-multiline'
    ],
    'no-new-wrappers': 2,
    'max-nested-callbacks': [
      1,
      6
    ],
    'spaced-comment': [
      2,
      'always'
    ],
    'semi-spacing': [
      2,
      {
        'after': true,
        'before': false
      }
    ],
    'no-proto': 2,
    'no-undef-init': 2,
    'space-return-throw-case': 2,
    'semi': [
      2,
      'always'
    ],
    'no-spaced-func': 2,
    'no-new-object': 2,
    'key-spacing': [
      2,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'eqeqeq': [
      2,
      'smart'
    ],
    'object-curly-spacing': [
      2,
      'never'
    ],
    'no-label-var': 2,
    'no-empty-label': 2,
    'computed-property-spacing': [
      2,
      'never'
    ],
    'no-labels': 2,
    'no-lonely-if': [
      2
    ],
    'yoda': [
      2,
      'never'
    ],
    'comma-style': [
      2,
      'last'
    ],
    'space-infix-ops': 2,
    'no-caller': 2,
    'guard-for-in': 2,
    'no-multi-spaces': 2,
    'space-unary-ops': [
      2,
      {
        'nonwords': false,
        'words': true
      }
    ],
    'no-inline-comments': [
      2
    ],
    'no-multi-str': 2,
    'no-with': 2,
    'no-sequences': 2,
    'no-extra-bind': 2,
    'no-return-assign': 2,
    'space-in-parens': [
      2,
      'never'
    ],
    'no-trailing-spaces': 2,
    'no-loop-func': 2,
    'new-parens': 2,
    'no-extra-parens': [
      2,
      'functions'
    ],
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'brace-style': [
      2,
      'stroustrup',
      {
        'allowSingleLine': true
      }
    ],
    'no-catch-shadow': 2,
    'space-before-blocks': [
      2,
      'always'
    ],
    'no-console': 0,
    'no-octal-escape': 2,
    'dot-notation': [
      2,
      {
        'allowKeywords': true
      }
    ],
    'no-script-url': 2
  },
  'globals': {
    'describe': true,
    'beforeEach': true,
    'before': true,
    'afterEach': true,
    'after': true,
    'it': true,
    'angular': true
  },
  'extends': 'eslint:recommended',
  'env': {
    'node': true,
    'es6': true,
    'browser': true
  }
};
