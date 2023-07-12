import isString from '../isString';

describe('isString', () => {
  test('字符串', () => {
    expect(isString('')).toBe(true);
    expect(isString('abc')).toBe(true);
  });
  test('空', () => {
    expect(isString()).toBe(false);
    expect(isString(null)).toBe(false);
  });
  test('特殊值', () => {
    expect(isString(0)).toBe(false);
    expect(isString(Number.NaN)).toBe(false);
    expect(isString({})).toBe(false);
  });
});
