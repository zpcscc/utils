import getUniqueId from '../index';

describe('getUniqueId', () => {
  test('正常生成唯一id', () => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    expect(id1).not.toBe(id2);
  });

  it('生成指定前缀的唯一id', () => {
    const prefix = 'test_';
    const id = getUniqueId(6, prefix);
    expect(id.startsWith(prefix)).toBe(true);
  });

  it('生成指定长度的唯一id', () => {
    const prefix = 'test_';
    const id1 = getUniqueId(6);
    const id2 = getUniqueId(6, prefix);
    expect(id1.length).toBe(6);
    expect(id2.replaceAll(prefix, '').length).toBe(6);
  });

  it('错误的值', () => {
    // @ts-expect-error 测试非数字
    const id1 = getUniqueId('22');
    const id2 = getUniqueId();
    expect(id1).not.toBe(id2);
  });
});
