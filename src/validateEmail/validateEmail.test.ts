import validateEmail from '.';

test('邮箱校验', () => {
  expect(validateEmail('zpcscc@gmail.com')).toBe(true);
});
