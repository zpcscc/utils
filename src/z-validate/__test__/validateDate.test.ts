import validateDate from '../validateDate';

describe('数据校验', () => {
  test('date', () => {
    expect(validateDate('Wed Apr 22 2023 21:35:27 GMT+0800 (中国标准时间)')).toBe(true);
    expect(validateDate('2023-12-01')).toBe(true);
    expect(validateDate('2023/12/01')).toBe(true);
    expect(validateDate('Wed')).toBe(false);
  });
});
