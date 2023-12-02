import toNumber from '..';

describe('toNumber', () => {
  test('数字', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-2.3)).toBe(-2.3);
  });
  test('字符', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('')).toBe(0);
    expect(toNumber('{}')).toBe(0);
    expect(toNumber('-3.2')).toBe(-3.2);
  });
  test('最大最小值', () => {
    expect(toNumber(Number.POSITIVE_INFINITY)).toBe(1.7976931348623157e308);
    expect(toNumber(Number.NEGATIVE_INFINITY)).toBe(-1.7976931348623157e308);
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  });
  test('特殊值', () => {
    expect(toNumber(Symbol(1))).toBe(0);
    expect(toNumber(() => {})).toBe(0);
  });
});
