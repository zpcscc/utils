import desensitizeName from '../desensitizeName';

describe('desensitizeName-脱敏测试', () => {
  test('desensitizeName', () => {
    expect(desensitizeName('诸葛亮')).toBe('诸**');
    expect(desensitizeName('诸葛章三李四')).toBe('诸***李*');
    expect(desensitizeName('Mark')).toBe('M***');
    expect(desensitizeName('Mark Name peter')).toBe('Mark **** *****');
  });
});
