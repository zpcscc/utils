import desensitizeIDCard from '../desensitizeIDCard';

describe('desensitizeIDCard-脱敏测试', () => {
  test('desensitizeIDCard', () => {
    expect(desensitizeIDCard('34112619980909089X')).toBe('341126********08**');
    expect(desensitizeIDCard('110291231211048')).toBe('110291******04*');
    expect(desensitizeIDCard('11029123121104')).toBe('11**********04');
  });
});
