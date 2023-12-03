import isNumber from '..';

describe('isNumber', () => {
  test('number', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(123.234)).toBe(true);
    expect(isNumber(Number.NaN)).toBe(false);
    expect(isNumber(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isNumber(Number.NEGATIVE_INFINITY)).toBe(false);
  });
  test('Symbol', () => {
    expect(isNumber(Symbol.iterator)).toBe(false);
  });
  test('空与字符串', () => {
    expect(isNumber()).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber('123')).toBe(false);
    expect(isNumber('abc')).toBe(false);
  });
  test('特殊值', () => {
    expect(isNumber({})).toBe(false);
  });
});
