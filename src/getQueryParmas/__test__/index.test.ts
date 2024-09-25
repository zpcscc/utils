import getQueryParams from '..';

const queryStr = 'name=John&age=30';
const result = { name: 'John', age: '30' };

describe('获取url参数', () => {
  test('需要解析的参数字符串', () => {
    expect(getQueryParams(queryStr)).toStrictEqual(result);
  });
  test('转码过的参数字符串', () => {
    expect(getQueryParams(encodeURIComponent(queryStr))).toStrictEqual(result);
  });
  test('完整的url链接', () => {
    expect(getQueryParams(`zpcscc.top?${queryStr}`)).toStrictEqual(result);
    expect(getQueryParams(`https://www.zpcscc.top?${queryStr}`)).toStrictEqual(result);
  });
  test('空字符串', () => {
    expect(getQueryParams('')).toStrictEqual({});
  });
  test('非字符串', () => {
    expect(getQueryParams()).toStrictEqual({});
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(getQueryParams(undefined)).toStrictEqual({});
  });
});
