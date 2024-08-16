import omit from '..';

describe('omit', () => {
  it('应从对象（浅）中删除指定的键', () => {
    const original = { a: 1, b: 2, c: 3 };
    const result = omit(original, ['b', 'c']);
    expect(result).toEqual({ a: 1 });
  });

  it('不应修改原始对象', () => {
    const original = { a: 1, b: 2, c: 3 };
    const result = omit(original, ['b']);
    expect(result).not.toEqual(original); // 确认返回的是一个新对象
    expect(original).toEqual({ a: 1, b: 2, c: 3 }); // 原始对象保持不变
  });

  it('如果deep为true，则应从嵌套对象中删除键', () => {
    const original = { a: 1, b: { c: 3, d: 4 }, e: 5 };
    const result = omit(original, ['c'], true);
    expect(result).toEqual({ a: 1, b: { d: 4 }, e: 5 });
  });

  it('如果deep为false，则不应从嵌套对象中删除键', () => {
    const original = { a: 1, b: { c: 3, d: 4 }, e: 5 };
    const result = omit(original, ['c'], false);
    expect(result).toEqual({ a: 1, b: { c: 3, d: 4 }, e: 5 });
  });

  it('应处理空对象', () => {
    const result = omit({}, ['a']);
    expect(result).toEqual({});
  });

  it('应处理空键以省略', () => {
    const original = { a: 1, b: 2 };
    const result = omit(original, []);
    expect(result).toEqual(original);
  });

  it('应该正确处理嵌套数组（即使在深度模式下）', () => {
    const original = { a: 1, b: { c: [1, 2, 3], d: 4 }, e: 5 };
    const result = omit(original, ['c'], true);
    expect(result).toEqual({ a: 1, b: { d: 4 }, e: 5 });
  });

  it('不应在深度模式下从数组中删除键', () => {
    const original = { a: 1, b: [2, { c: 3 }], d: 4 };
    const result = omit(original, ['c'], true);
    expect(result).toEqual({ a: 1, b: [2, { c: 3 }], d: 4 });
  });
});
