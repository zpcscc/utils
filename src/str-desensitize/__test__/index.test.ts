import desensitize from '..';

describe('desensitize-脱敏测试', () => {
  test('default', () => {
    expect(desensitize('')).toBe('');
    expect(desensitize('张')).toBe('张');
    expect(desensitize('张三')).toBe('张*');
    expect(desensitize('张3')).toBe('张*');
    expect(desensitize('张3粒死王五')).toBe('张3**王五');
  });
  test('bankCard', () => {
    expect(desensitize('6226 8372 9938 0192', 'bankCard')).toBe('6226 **** **** 0192');
  });
  test('IDCard', () => {
    expect(desensitize('110291202312120488', 'IDCard')).toBe('110291********04**');
  });
  test('name', () => {
    expect(desensitize('章三', 'name')).toBe('章*');
    expect(desensitize('章三李四', 'name')).toBe('章***');
  });
  test('phone', () => {
    expect(desensitize('17775262736', 'phone')).toBe('177*****736');
  });
  test('telephone', () => {
    expect(desensitize('0571-87006789-1234', 'telephone')).toBe('0571-8700****-12**');
  });
});
