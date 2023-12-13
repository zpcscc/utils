import desensitizePhone from '../desensitizePhone';

describe('desensitizePhone-脱敏测试', () => {
  test('desensitizePhone', () => {
    expect(desensitizePhone('13927388475')).toBe('139****8475');
    expect(desensitizePhone('177-7526-2736')).toBe('177****2736');
    expect(desensitizePhone('177 7526 2736')).toBe('177****2736');
  });
});
