import validateInteger from '.';

test('整数校验', () => {
  expect(validateInteger(23475133)).toBe(true);
  // @ts-expect-error 测试数据
  expect(validateInteger('233sdf')).toBe(false);
});
