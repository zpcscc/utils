import validateEmail from '.';

test('邮箱校验', () => {
  expect(validateEmail('dxsixpc@gmail.com')).toBe(true);
});
