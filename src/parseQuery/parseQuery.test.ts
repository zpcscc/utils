import parseQuery from '.';

describe('parseQuery 单元测试', () => {
  test('正常输入', () => {
    expect(parseQuery('http://example.com?name=test&id=123')).toStrictEqual({
      name: 'test',
      id: '123'
    });
  });
  test('异常输入', () => {
    expect(parseQuery('test')).toStrictEqual({});
    // @ts-expect-error 测试需要
    expect(parseQuery(null)).toStrictEqual({});
  });
});
