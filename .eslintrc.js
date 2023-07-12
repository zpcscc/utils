// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: require.resolve('@dxsixpc/configs/eslint-config/react'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    curly: ['error', 'multi-line'],
    'arrow-body-style': 'off',
    'space-before-function-paren': ['error', 'always'],
  },
};
