import desensitizeTelephone from '../desensitizeTelephone';

describe('desensitizeTelephone-脱敏测试', () => {
  test('desensitizeTelephone', () => {
    expect(desensitizeTelephone('0571-87026789-1234-1223')).toBe('05*******************23');
    expect(desensitizeTelephone('0571-87026789-1234')).toBe('0571-8702****-12**');
    expect(desensitizeTelephone('0571-87026789')).toBe('0571-8702****');
    expect(desensitizeTelephone('87026789')).toBe('8702****');
  });
});
