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
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
  },
};
