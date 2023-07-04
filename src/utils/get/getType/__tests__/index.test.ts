import getType from '../getType';

describe('获取数据类型', () => {
  test('Array', () => {
    expect(getType([])).toBe('Array');
  });
  test('Arguments', () => {
    (function () {
      // eslint-disable-next-line prefer-rest-params
      expect(getType(arguments)).toBe('Arguments');
    })();
  });
  test('Boolean', () => {
    expect(getType(true)).toBe('Boolean');
    expect(getType(false)).toBe('Boolean');
  });
  test('Date', () => {
    expect(getType(new Date())).toBe('Date');
  });
  test('Error', () => {
    expect(getType(new Error('error'))).toBe('Error');
  });
  test('Function', () => {
    expect(
      getType(() => {
        console.log('hello world');
      }),
    ).toBe('Function');
    expect(
      getType(function () {
        console.log('hello world');
      }),
    ).toBe('Function');
  });
  test('Map', () => {
    expect(getType(new Map())).toBe('Map');
  });
  test('Null', () => {
    expect(getType(null)).toBe('Null');
  });
  test('Number', () => {
    expect(getType(123)).toBe('Number');
  });
  test('RegExp', () => {
    // eslint-disable-next-line prefer-regex-literals
    expect(getType(new RegExp('hello', 'g'))).toBe('RegExp');
    expect(getType(/hello/g)).toBe('RegExp');
  });
  test('Set', () => {
    expect(getType(new Set())).toBe('Set');
  });
  test('String', () => {
    expect(getType('string')).toBe('String');
  });
  test('Undefined', () => {
    expect(getType()).toBe('Undefined');
  });
});
