import desensitizeBankCard from '../desensitizeBankCard';

describe('desensitizeBankCard-脱敏测试', () => {
  test('desensitizeBankCard', () => {
    expect(desensitizeBankCard('6226 8372 9928 0192 90')).toBe('6226 **** **** ***2 90');
    expect(desensitizeBankCard('6226 8372 9928 019')).toBe('62** **** **** *19');
  });
});
