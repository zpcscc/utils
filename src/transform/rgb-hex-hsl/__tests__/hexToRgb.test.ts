import hexToRgb from '../hexToRgb';

// 长度为3的hex
const hex3 = '#66c';
const rgb3 = 'rgb(102,102,204)';

// 长度为4的hex
const hex4 = '#66cc';
const rgb4 = 'rgb(102,102,204,0.8)';

// 6长度的hex
const hex6 = '#66ccff';
const rgb6 = 'rgb(102,204,255)';

// 长度为8的hex
const hex8 = '#66ccff99';
const rgb8 = 'rgb(102,204,255,0.6)';

// hex转rgb
describe('hexToRgb', () => {
  test('2位hex', () => {
    expect.assertions(1);
    expect(() => hexToRgb('#66')).toThrow('hex格式错误');
  });
  test('3位hex', () => {
    expect(hexToRgb(hex3)).toBe(rgb3);
  });
  test('4位hex', () => {
    expect(hexToRgb(hex4)).toBe(rgb4);
  });
  test('6位hex', () => {
    expect(hexToRgb(hex6)).toBe(rgb6);
  });
  test('8位hex', () => {
    expect(hexToRgb(hex8)).toBe(rgb8);
  });
  test('透明色', () => {
    expect(hexToRgb('transparent')).toBe('rgb(0,0,0,0)');
  });
  test('其他字符串', () => {
    expect.assertions(1);
    expect(() => hexToRgb('red')).toThrow('颜色格式错误');
  });
});
