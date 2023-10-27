import validateIDCard from '.';

test('身份证校验', () => {
  expect(validateIDCard('110101199003072412')).toBe(true);
});
