import pick from '..';

describe('pick', () => {
  it('应从对象（浅）中选取指定的键', () => {
    const original = { a: 1, b: 2, c: 3 };
    const result = pick(original, ['a', 'b']);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('不应拾取对象中不存在的字段', () => {
    const original = { a: 1, b: 2 };
    const result = pick(original, ['a', 'c']);
    expect(result).toEqual({ a: 1 });
  });

  it('不应修改原始对象', () => {
    const original = { a: 1, b: 2, c: 3 };
    const result = pick(original, ['a', 'b']);
    expect(result).not.toEqual(original); // 确认返回的是一个新对象
    expect(original).toEqual({ a: 1, b: 2, c: 3 }); // 原始对象保持不变
  });

  it('如果deep为true，则应从嵌套对象中选取键', () => {
    const original = { a: 1, b: { c: 3, d: 4 }, e: 5 };
    const result = pick(original, ['b'], true);
    expect(result).toEqual({ b: { c: 3, d: 4 } });
  });

  it('如果deep为false，则不应从嵌套对象中选取键', () => {
    const original = { a: 1, b: { c: 3, d: 4 }, e: 5 };
    const result = pick(original, ['b'], false);
    expect(result).toEqual({ b: { c: 3, d: 4 } });
  });

  it('应处理空对象', () => {
    const result = pick({}, ['a']);
    expect(result).toEqual({});
  });

  it('应处理空对象以进行选择', () => {
    const original = { a: 1, b: 2 };
    const result = pick(original, []);
    expect(result).toEqual({});
  });
});
