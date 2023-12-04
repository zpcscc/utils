import isNil from '..';

describe('isNil', () => {
  test('null或undefined', () => {
    expect(isNil(null)).toBe(true);
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isNil(undefined)).toBe(true);
  });
  test('空', () => {
    expect(isNil()).toBe(true);
    expect(isNil('')).toBe(false);
  });
  test('特殊值', () => {
    // eslint-disable-next-line no-void
    expect(isNil(void 0)).toBe(true);
    expect(isNil(Number.NaN)).toBe(false);
  });
});
