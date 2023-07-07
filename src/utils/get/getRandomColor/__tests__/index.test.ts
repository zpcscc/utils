import getRandomColor from '../getRandomColor';

describe('获取随机颜色', () => {
  test('rgb', () => {
    expect(getRandomColor('rgb')).toMatch(/rgb\(/);
  });
  test('hsl', () => {
    expect(getRandomColor('hsl')).toMatch(/hsl\(/);
  });
  test('hex', () => {
    expect(getRandomColor()).toMatch(/#/);
    expect(getRandomColor('hex')).toMatch(/#/);
  });
});
