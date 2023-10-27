import toFinite from '.';

describe('toFinite', () => {
  test('数字', () => {
    expect(toFinite(3.2)).toBe(3.2);
    expect(toFinite(0)).toBe(0);
    expect(toFinite(-2.3)).toBe(-2.3);
  });
  test('字符', () => {
    expect(toFinite('3.2')).toBe(3.2);
    expect(toFinite('')).toBe(0);
    expect(toFinite('{}')).toBe(0);
    expect(toFinite('-3.2')).toBe(-3.2);
  });
  test('最大最小值', () => {
    expect(toFinite(Number.POSITIVE_INFINITY)).toBe(1.7976931348623157e308);
    expect(toFinite(Number.NEGATIVE_INFINITY)).toBe(-1.7976931348623157e308);
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
  });
});
