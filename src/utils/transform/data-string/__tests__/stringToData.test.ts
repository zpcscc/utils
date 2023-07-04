import stringToData from '../stringToData';

const data = {
  obj: {
    name: '测试',
  },
  array: ['测试'],
};
// 为格式化的默认字符串
const string = '{"obj":{"name":"测试"},"array":["测试"]}';

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
