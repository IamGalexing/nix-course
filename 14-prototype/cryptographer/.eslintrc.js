module.exports = {
  env: {
    commonjs: true,
    es2022: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'func-names': 0,
    'no-extend-native': ['error', { exceptions: ['String'] }],
    'no-shadow': 'off',
  },
};
