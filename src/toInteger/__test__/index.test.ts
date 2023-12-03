import toInteger from '..';

describe('toInteger', () => {
  test('数字', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(0)).toBe(0);
  });
  test('字符', () => {
    expect(toInteger('')).toBe(0);
    expect(toInteger('3.2')).toBe(3);
  });
  test('最大最小值', () => {
    expect(toInteger(Number.POSITIVE_INFINITY)).toBe(1.7976931348623157e308);
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });
});
