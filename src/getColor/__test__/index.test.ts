import getColor from '..';

describe('获取随机颜色', () => {
  test('rgb', () => {
    expect(getColor('rgb')).toMatch(/rgb\(/);
  });
  test('hsl', () => {
    expect(getColor('hsl')).toMatch(/hsl\(/);
  });
  test('hex', () => {
    expect(getColor()).toMatch(/#/);
    expect(getColor('hex')).toMatch(/#/);
  });
});
