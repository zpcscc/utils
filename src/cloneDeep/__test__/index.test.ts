import cloneDeep from '..';

describe('cloneDeep-深拷贝', () => {
  test('简单对象测试', () => {
    const original = { a: 1, b: 2 };
    const copy = cloneDeep(original);
    expect(copy).toEqual(original);
  });

  test('嵌套对象测试', () => {
    const original = { a: { b: { c: 3 } } };
    const copy = cloneDeep(original);
    expect(copy).toEqual(original);
  });

  test('数组测试', () => {
    const original = [1, 2, { a: 3 }];
    const copy = cloneDeep(original);
    expect(copy).toEqual(original);
  });

  test('日期测试', () => {
    const original = { date: new Date() };
    const copy = cloneDeep(original);
    expect(copy).toEqual(original);
    expect(copy.date.getTime()).toBe(original.date.getTime());
  });

  test('Map 测试', () => {
    const original = new Map([['key', 'value']]);
    const copy = cloneDeep(original);
    expect(copy).toEqual(original);
  });

  test('Set 测试', () => {
    const original = new Set([1, 2, 3]);
    const copy = cloneDeep(original);
    expect(copy).toEqual(original);
  });

  test('克隆函数', () => {
    const original = {
      func() {
        return 'hello';
      }
    };
    expect(cloneDeep(original)).toEqual(original);
  });
});
