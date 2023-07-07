import hslToRgb from '../hslToRgb';

// 长度为3的hsl
const hsl = 'hsl(240,50%,60%,80)';
const rgb = 'rgb(102,102,204,0.8)';

// 长度为4的hsl
const hsl4 = 'hsl(240,50%,60%,0.8)';
const rgb4 = 'rgb(102,102,204,0.8)';

// 6长度的hsl
const hsl6 = 'hsl(200,100%,70%)';
const rgb6 = 'rgb(102,204,255)';

// 长度为8的hsl
const hsl8 = 'hsl(200,100%,70%,0.6)';
const rgb8 = 'rgb(102,204,255,0.6)';

// hsl转rgb
describe('hslToRgb', () => {
  test('2位hsl', () => {
    expect.assertions(1);
    expect(() => hslToRgb('hsl(240,50%)')).toThrow('hsl格式错误');
  });
  test('3位hsl', () => {
    expect(hslToRgb(hsl)).toBe(rgb);
  });
  test('4位hsl', () => {
    expect(hslToRgb(hsl4)).toBe(rgb4);
  });
  test('6位hsl', () => {
    expect(hslToRgb(hsl6)).toBe(rgb6);
  });
  test('8位hsl', () => {
    expect(hslToRgb(hsl8)).toBe(rgb8);
  });
  test('透明色', () => {
    expect(hslToRgb('transparent')).toBe('rgb(0,0,0,0)');
  });
  test('其他字符串', () => {
    expect.assertions(1);
    expect(() => hslToRgb('red')).toThrow('颜色格式错误');
  });
});
