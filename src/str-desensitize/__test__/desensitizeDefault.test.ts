import desensitizeDefault from '../desensitizeDefault';

describe('desensitizeDefault-脱敏测试', () => {
  test('desensitizeDefault', () => {
    expect(desensitizeDefault('诸葛章三')).toBe('诸**三');
    expect(desensitizeDefault('诸葛章三李四王五')).toBe('诸葛****王五');
  });
});
