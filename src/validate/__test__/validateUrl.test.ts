import validateUrl from '../validateUrl';

describe('数据校验', () => {
  test('url', () => {
    expect(validateUrl('https://zpcscc.com')).toBe(true);
    expect(validateUrl('http://zpcscc.top')).toBe(true);
    expect(validateUrl('zpcscc.top')).toBe(false);
    expect(validateUrl('zpcscc.cn.top')).toBe(false);
    expect(validateUrl('htps://zpcscc.com')).toBe(false);
  });
});
