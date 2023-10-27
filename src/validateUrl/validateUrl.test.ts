import validateUrl from '.';

test('url链接校验', () => {
  expect(validateUrl('https://zpcscc.top')).toBe(true);
  expect(validateUrl('')).toBe(false);
});
