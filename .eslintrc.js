module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Used in classes for shorthand declaration of constructor + properties.
    '@typescript-eslint/no-parameter-properties': 0,
    // Used where we declare factories referencing classes.
    '@typescript-eslint/no-use-before-define': 0,
    // Used to allow empty interfaces for avoiding some typescript errs.
    '@typescript-eslint/no-empty-interface': 0,
    // Since we are dealing with third-party APIs, we should not enforce this.
    '@typescript-eslint/camelcase': 0,
    // We want to enforce optional chaining in typescript.
    // We can't enable this until the @forge/bundler is upgraded with latest babel
    // https://bitbucket.org/atlassian/forge-cli-bundler/src/master/
    // "@typescript-eslint/prefer-optional-chain": ["error"],
  },
};
