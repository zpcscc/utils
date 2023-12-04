import validateIDCard from '../validateIDCard';

describe('数据校验', () => {
  test('IDCard', () => {
    expect(validateIDCard('110101199003072422')).toBe(true);
    expect(validateIDCard('1101011990030721')).toBe(false);
  });
});
