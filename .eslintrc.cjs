module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: 'current', 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jest'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jest/no-focused-tests': 'off',
  },
};
