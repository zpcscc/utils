import toString from '../toString';

describe('toString', () => {
  test('数字', () => {
    expect(toString(3.2)).toBe('3.2');
    expect(toString(0)).toBe('0');
    expect(toString(-0)).toBe('-0');
    expect(toString(-2.3)).toBe('-2.3');
  });
  test('字符', () => {
    expect(toString('3.2')).toBe('3.2');
    expect(toString('{}')).toBe('{}');
  });
  test('特殊值', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([])).toBe('');
    expect(toString([null, null])).toBe(',');
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(toString(undefined)).toBe('');
    expect(toString(null)).toBe('');
    expect(toString(Symbol.iterator)).toBe('Symbol(Symbol.iterator)');
    expect(toString(Number.POSITIVE_INFINITY)).toBe('Infinity');
    expect(toString(Number.NEGATIVE_INFINITY)).toBe('-Infinity');
    expect(toString(Number.MIN_VALUE)).toBe('5e-324');
  });
});
