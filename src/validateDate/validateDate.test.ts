import validateDate from '.';

test('日期校验', () => {
  expect(validateDate('Wed Apr 19 2023 21:35:27 GMT+0800 (中国标准时间)')).toBe(true);
});
describe('数据校验', () => {});
