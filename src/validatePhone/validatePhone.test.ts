import validatePhone from '.';

test('手机号校验', () => {
  expect(validatePhone('17775210683')).toBe(true);
});
