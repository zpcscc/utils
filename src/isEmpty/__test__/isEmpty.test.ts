/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
/* eslint-disable func-style */
import isEmpty from '..';

describe('isEmpty', () => {
  test('null或undefined', () => {
    expect(isEmpty(null)).toBe(true);
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty()).toBe(true);
    expect(isEmpty('')).toBe(true);
  });
  test('特殊值', () => {
    // eslint-disable-next-line no-void
    expect(isEmpty(void 0)).toBe(true);
    expect(isEmpty(Number.NaN)).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });
  test('不为空的值', () => {
    // eslint-disable-next-line no-void
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty('123')).toBe(false);
    expect(isEmpty('{}')).toBe(false);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1, b: 2 })).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty(new Map([[1, 2]]))).toBe(false);
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
    (function test() {
      expect(isEmpty(arguments)).toBe(true);
    })();
  });
});
