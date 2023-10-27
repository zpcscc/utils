/* eslint-disable prefer-arrow-callback */
import toString from '.';

const data = {
  obj: {
    name: '测试',
  },
  array: ['测试'],
};

// 格式化，空2格缩紧的字符串
const formatString = `{
  "obj": {
    "name": "测试"
  },
  "array": [
    "测试"
  ]
}`;
// 为格式化的默认字符串
const string = '{"obj":{"name":"测试"},"array":["测试"]}';

const formatArray = `[
  1,
  2,
  3
]`;

describe('toString', () => {
  test('数字', () => {
    expect(toString(0)).toBe('0');
    expect(toString(-0)).toBe('-0');
    expect(toString(2347512)).toBe('2347512');
    expect(toString(2347512298379868)).toBe('2347512298379868');
  });
  test('symbol', () => {
    expect(toString(Symbol(1))).toBe('Symbol(1)');
  });
  test('对象数据+stringify参数', () => {
    expect(toString(data)).toBe(string);
    expect(toString(data, null, 2)).toBe(formatString);
  });
  test('数组', () => {
    expect(toString([1, 2, 3])).toBe('[1,2,3]');
    expect(toString([1, 2, 3], null, 2)).toBe(formatArray);
  });
  test('布尔值', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });
  test('函数', () => {
    expect(toString(() => {})).toBe('() => {}');
    expect(toString(function () {})).toBe('function () {}');
  });
  test('空值', () => {
    expect(toString([])).toBe('[]');
    // @ts-expect-error 测试特殊值
    expect(toString()).toBe('');
    expect(toString('')).toBe('');
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(toString(undefined)).toBe('');
    expect(toString(null)).toBe('null');
  });
});
