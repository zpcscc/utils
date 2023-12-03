import validate from '../index';

describe('数据校验', () => {
  test('date', () => {
    expect(validate('Wed Apr 19 2023 21:35:27 GMT+0800 (中国标准时间)', 'date')).toBe(true);
  });
  test('email', () => {
    expect(validate('zpcscc@gmail.com', 'email')).toBe(true);
  });
  test('IDCard', () => {
    expect(validate('110101199003072412', 'IDCard')).toBe(true);
  });
  test('integer', () => {
    expect(validate(23475133, 'integer')).toBe(true);
    expect(validate('233sdf', 'integer')).toBe(false);
  });
  test('phone', () => {
    expect(validate('17775210683', 'phone')).toBe(true);
  });
  test('url', () => {
    expect(validate('https://zpcscc.top', 'url')).toBe(true);
  });
  test('错误校验', () => {
    // @ts-expect-error 用于测试错误配置
    expect(validate('error', 'error')).toBe(false);
  });
});
