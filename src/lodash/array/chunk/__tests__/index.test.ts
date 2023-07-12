import chunk from '../chunk';

describe('chunk', () => {
  test('空数组', () => {
    // @ts-expect-error 测试需要使用null
    expect(chunk(null, 2)).toStrictEqual([]);
    expect(chunk([], 2)).toStrictEqual([]);
  });
  test('空size', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual([['a'], ['b'], ['c'], ['d']]);
  });
  test('正确传值', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
  });
});
