import validateInteger from '../validateInteger';

describe('数据校验', () => {
  test('integer', () => {
    expect(validateInteger(23475131232323)).toBe(true);
    // @ts-expect-error 测试需要
    expect(validateInteger('233sdf')).toBe(false);
  });
});
