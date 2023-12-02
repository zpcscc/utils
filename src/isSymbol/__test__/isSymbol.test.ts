import isSymbol from '..';

describe('isSymbol', () => {
  test('Symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });
  test('空与字符串', () => {
    expect(isSymbol()).toBe(false);
    expect(isSymbol('')).toBe(false);
    expect(isSymbol('abc')).toBe(false);
  });
  test('特殊值', () => {
    expect(isSymbol({})).toBe(false);
  });
});
