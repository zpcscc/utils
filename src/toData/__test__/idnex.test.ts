import toData from '..';

const data = {
  obj: {
    name: '测试'
  },
  array: ['测试']
};
// 为格式化的默认字符串
const string = '{"obj":{"name":"测试"},"array":["测试"]}';

describe('toData', () => {
  test('正常伪数据字符串', () => {
    expect(toData(string)).toStrictEqual(data);
    expect(toData([])).toStrictEqual([]);
  });
  test('错误伪数据字符串', () => {
    expect(toData('{')).toStrictEqual('{');
  });
  test('字符串', () => {
    expect(toData('')).toBe('');
  });
  test('数字字符串', () => {
    expect(toData('0')).toBe(0);
    expect(toData('0123')).toBe(123);
  });
  test('布尔值字符串', () => {
    expect(toData('true')).toBe(true);
    expect(toData('false')).toBe(false);
  });
  test('symbol字符串', () => {
    expect(toData('Symbol()')).toBe('Symbol()');
    expect(toData('Symbol()')).toBe('Symbol()');
  });
  test('非字符的值', () => {
    expect(toData(123)).toBe(123);
  });
});
