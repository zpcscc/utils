import isObject from '.';

describe('isObject', () => {
  test('对象，数组', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([1, 2, 3])).toBe(false);
  });
  test('空值', () => {
    expect(isObject()).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(null)).toBe(false);
  });
});
