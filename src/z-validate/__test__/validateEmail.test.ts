import validateEmail from '../validateEmail';

describe('数据校验', () => {
  test('email', () => {
    expect(validateEmail('zhupc@gmail.com')).toBe(true);
    expect(validateEmail('zpcscc@gmail')).toBe(false);
  });
});
