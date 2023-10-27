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
    // 禁止将函数直接传给方法。这里关闭。
    'unicorn/no-array-callback-reference': 'off',
  },
};
