import dataToString from '../dataToString';
import stringToData from '../stringToData';

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

describe('dataToString', () => {
  test('对象数据', () => {
    expect(dataToString(data)).toBe(string);
  });
  test('对象数据+stringify参数', () => {
    expect(dataToString(data, null, 2)).toBe(formatString);
  });
  test('数组', () => {
    expect(dataToString([1, 2, 3])).toBe('[1,2,3]');
  });
  test('空数组', () => {
    expect(dataToString([])).toBe('[]');
  });
  test('空字符串', () => {
    expect(dataToString('')).toBe('');
  });
});

describe('stringToData', () => {
  test('正常伪数据字符串', () => {
    expect(stringToData(string)).toStrictEqual(data);
  });
  test('空字符串', () => {
    expect(stringToData('')).toStrictEqual('');
  });
  test('数字字符串', () => {
    expect(stringToData('0')).toStrictEqual('0');
  });
  test('非字符串', () => {
    expect(stringToData([])).toStrictEqual([]);
  });
});
