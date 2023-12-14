import pickNumber from '..';

describe('pickNumber 单元测试', () => {
  test('所有数字', () => {
    expect(pickNumber('123-234 32.23 -23.43')).toStrictEqual([123, -234, 32.23, -23.43]);
  });
  test('整数', () => {
    expect(pickNumber('123-234', 'integer')).toStrictEqual([123, -234]);
    expect(pickNumber('123-234', 'integerPlus')).toStrictEqual([123, 234]);
    expect(pickNumber('123-234', 'integerMinus')).toStrictEqual([-234]);
  });
  test('小数', () => {
    expect(pickNumber('123-2.34', 'decimal')).toStrictEqual([-2.34]);
    expect(pickNumber('12.4-sdf=23.4-23.8', 'decimalPlus')).toStrictEqual([12.4, 23.4, 23.8]);
    expect(pickNumber('12.4-234-33.4', 'decimalMinus')).toStrictEqual([-33.4]);
  });
  test('异常类型', () => {
    // @ts-expect-error 测试异常数据
    expect(pickNumber('123-234', 'integerPlusMinus')).toStrictEqual([123, -234]);
    expect(pickNumber('ckljsdlkgajsl')).toStrictEqual([]);
  });
});
