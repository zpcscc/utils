import desensitizePhone from '../desensitizePhone';

describe('desensitizePhone-脱敏测试', () => {
  test('desensitizePhone', () => {
    expect(desensitizePhone('13927388475')).toBe('139*****475');
    expect(desensitizePhone('177-75262-736')).toBe('177*****736');
    expect(desensitizePhone('177 75262 736')).toBe('177*****736');
  });
});
