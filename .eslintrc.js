module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'no-console': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'object-curly-spacing': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'func-call-spacing': 'off',
    'arrow-parens': 'off',
    'standard/no-callback-literal': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'key-spacing': 'off',
    'space-before-blocks': 'off',
    'prefer-const': 'off',
    'comma-spacing': 'off',
    'keyword-spacing': 'off',
    'space-infix-ops': 'off',
    'arrow-spacing': 'off',
    'object-shorthand': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'semi': 'off',
    'no-multiple-empty-lines': 'off'
  }
}
