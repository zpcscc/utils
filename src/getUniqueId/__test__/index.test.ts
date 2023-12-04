import getUniqueId from '..';

describe('getUniqueId', () => {
  test('正常生成唯一id', () => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    expect(id1).not.toBe(id2);
  });

  it('生成指定前缀的唯一id', () => {
    const prefix = 'test_';
    const id = getUniqueId(prefix);
    expect(id.startsWith(prefix)).toBe(true);
  });
});
