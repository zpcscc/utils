import getRandomColor from '../getRandomColor';

describe('获取随机颜色', () => {
  test('rgba', () => {
    expect(getRandomColor('rgba')).toMatch(/rgba\(/);
  });
  test('hex', () => {
    expect(getRandomColor()).toMatch(/#/);
    expect(getRandomColor('hex')).toMatch(/#/);
  });
});
