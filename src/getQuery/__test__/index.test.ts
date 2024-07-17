import getQuery from '..';

const queryStr = 'name=John&age=30';
const result = { name: 'John', age: '30' };

describe('获取url参数', () => {
  test('需要解析的参数字符串', () => {
    expect(getQuery(queryStr)).toStrictEqual(result);
  });
  test('转码过的参数字符串', () => {
    expect(getQuery(encodeURIComponent(queryStr))).toStrictEqual(result);
  });
  test('完整的url链接', () => {
    expect(getQuery(`zpcscc.top?${queryStr}`)).toStrictEqual(result);
    expect(getQuery(`https://www.zpcscc.top?${queryStr}`)).toStrictEqual(result);
  });
  test('空字符串', () => {
    expect(getQuery('')).toStrictEqual({});
  });
  test('非字符串', () => {
    expect(getQuery()).toStrictEqual({});
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(getQuery(undefined)).toStrictEqual({});
  });
});
