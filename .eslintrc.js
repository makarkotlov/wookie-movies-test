module.exports = {
  root: true,

  plugins: ['react', '@typescript-eslint'],

  extends: ['eslint:recommended', '@react-native-community', 'prettier/react'],

  parser: '@typescript-eslint/parser',

  globals: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    NodeJS: true,
  },

  rules: {
    /*
     * class Foo {
     *   static bar;
     *   private baz;
     *   constructor() {
     *   }
     *   method() {
     *   }
     * }
     */
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        classes: [
          'static-field',
          'static-method',

          'signature',

          'private-field',
          'protected-field',
          'field',

          'constructor',

          'private-method',
          'protected-method',
          'method',
        ],
      },
    ],

    /*
     * interface I {
     *   foo: () => void,
     * }
     */
    '@typescript-eslint/method-signature-style': ['warn', 'property'],

    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        /* Allow pascal case for variables, functions and parameters */ selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        /* Allow leading underscore, pascal case and snake case for destructured variables */ selector: 'variable',
        modifiers: ['destructured'],
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        /* Require private properties with leading underscore */ selector: 'property',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
        trailingUnderscore: 'forbid',
      },
      {
        /* Require pascal case for types */ selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        /* Require pascal case for enums */ selector: 'enumMember',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],

    /*
     * Explicit any
     */
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],

    /*
     * Return with any type
     */
    '@typescript-eslint/no-unsafe-return': ['off'],

    /*
     * Unused variables
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],

    '@typescript-eslint/no-shadow': [
      'warn',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],

    '@typescript-eslint/prefer-readonly': ['off'],

    /*
     * Use of this in unbound methods
     */
    '@typescript-eslint/unbound-method': ['off'],

    /*
     * ~index;
     * ++i;
     */
    'no-bitwise': 'off',
    'no-plusplus': 'off',

    /*
     * const foo = [1];
     * const bar = [
     *   1,
     * ];
     */
    'array-bracket-newline': ['warn', 'consistent'],

    /*
     * const foo = [1, 2, 3];
     */
    'array-bracket-spacing': ['warn', 'never'],

    /*
     * if (foo) { bar() }
     */
    'block-spacing': ['warn', 'always'],

    /*
     * if (foo) {
     *   bar();
     * } else {
     *   baz();
     * }
     */
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],

    /*
     * const foo = [
     *   1,
     * ];
     */
    'comma-dangle': ['warn', 'always-multiline'],

    /*
     * const foo = [1, 2];
     */
    'comma-spacing': ['warn', { before: false, after: true }],

    /*
     * const foo,
     *   bar,
     *   baz;
     */
    'comma-style': ['warn', 'last'],

    /*
     * let foo = bar[bar];
     */
    'computed-property-spacing': ['warn', 'never'],

    /*
     * call();
     */
    'func-call-spacing': ['warn', 'never'],

    /*
     * function bar() { 1; }
     * let bar = () => 1;
     */
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    /*
     * foo(1);
     * bar(
     *   2, 3
     * );
     */
    'function-paren-newline': ['warn', 'multiline-arguments'],

    /*
     * [
     *   1
     * ]
     */
    indent: ['warn', 2, { SwitchCase: 1 }],

    /*
     * let foo = { bar: true };
     */
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

    /*
     * if (foo) { return; }
     */
    'keyword-spacing': ['warn', { before: true, after: true }],

    /*
     * Use UNIX linebreaks
     */
    'linebreak-style': ['error', 'unix'],

    /*
     * Limit line length to 120 characters
     */
    'max-len': ['warn', { code: 120, ignoreTrailingComments: true }],

    /*
     * foo(0, 1, 2, 3, 4, 5);
     */
    'max-params': ['error', { max: 6 }],

    /*
     * a
     * = b
     * = 1;
     */
    'max-statements-per-line': ['error', { max: 1 }],

    'new-parens': ['warn'],

    'no-trailing-spaces': ['warn'],

    /*
     * Replaced with typescript rule
     */
    'no-shadow': ['off'],

    /*
     * try {
     * } catch (error) {
     *   throw error;
     * }
     */
    'no-useless-catch': 'off',

    'no-whitespace-before-property': ['warn'],

    /*
     * let foo = { bar, baz };
     */
    'object-curly-newline': ['warn', { consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],

    /*
     * let foo = 'bar'
     *   + 'baz';
     */
    'operator-linebreak': ['warn', 'before'],

    /*
     * 'bar'
     */
    quotes: ['warn', 'single'],

    /*
     * Replaced with typescript rule
     */
    semi: 'off',

    /*
     * () => {
     * };
     */
    'space-before-blocks': ['warn', 'always'],

    /*
     * foo(1, 2, 3);
     */
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    /*
     * foo('bar');
     */
    'space-in-parens': ['warn', 'never'],

    /*
     * switch (a) {
     *   case 0: break;
     * }
     */
    'switch-colon-spacing': ['warn', { after: true, before: false }],

    /*
     * No prop-types
     */
    'react/prop-types': ['off'],

    'react/no-array-index-key': ['warn'],

    'react/no-children-prop': ['warn'],

    'react/no-deprecated': ['error'],

    'react/no-did-mount-set-state': ['off'],

    'react/no-direct-mutation-state': ['error'],

    'react/no-string-refs': ['error'],

    'react/no-unsafe': ['error'],

    /*
     * <View
     *   disabled={true}
     * />
     */
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-closing-tag-location': ['warn'],

    /*
     * <View title='foo'>
     *   {'bar'}
     * </View>
     */
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'always' }],

    /*
     * <View>
     *   {
     *     foo
     *   }
     * </View>
     */
    'react/jsx-curly-newline': ['warn', 'consistent'],

    /*
     * <View foo={test} style={{ color: 'red' }} />
     */
    'react/jsx-curly-spacing': [
      'warn',
      'never',
      {
        spacing: { objectLiterals: 'never' },
      },
    ],

    /*
     * <View foo={test} />
     */
    'react/jsx-equals-spacing': ['warn', 'never'],

    /*
     * <View
     *   foo
     * />
     */
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],

    'react/jsx-indent': [
      'warn',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],

    'react/jsx-indent-props': ['warn', 2],

    'react/jsx-key': ['error', { checkFragmentShorthand: true }],

    'react/jsx-max-depth': ['warn', { max: 6 }],

    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],

    'react/jsx-no-bind': ['warn'],

    'react/jsx-no-duplicate-props': ['warn'],

    'react/jsx-no-literals': ['warn', { noStrings: true, ignoreProps: true }],

    'react/jsx-no-useless-fragment': ['warn'],

    /*
     * <View>
     *   {children}
     * </View>
     */
    'react/jsx-one-expression-per-line': ['warn', { allow: 'none' }],

    'react/jsx-pascal-case': ['error'],

    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens',
        logical: 'parens',
        prop: 'ignore',
      },
    ],

    'react-native/no-unused-styles': ['warn'],
    'react-native/no-inline-styles': ['error'],

    'prettier/prettier': 'off',
  },
}
