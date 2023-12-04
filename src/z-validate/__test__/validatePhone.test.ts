import validatePhone from '../validatePhone';

describe('数据校验', () => {
  test('phone', () => {
    expect(validatePhone('17775210681')).toBe(true);
    expect(validatePhone('17775212681')).toBe(true);
    expect(validatePhone('1777521061')).toBe(false);
  });
});
