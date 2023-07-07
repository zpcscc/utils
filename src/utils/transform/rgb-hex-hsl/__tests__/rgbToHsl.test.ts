import rgbToHsl from '../rgbToHsl';

// 6长度的hsl
const hsl6 = 'hsl(200,100%,70%)';
const rgb6 = 'rgb(102,204,255,1)';

// 长度为8的hsl
const hsl8 = 'hsl(200,100%,70%,0.6)';

// rgb转hsl
describe('rgbToHsl', () => {
  test('rgb颜色', () => {
    expect(rgbToHsl('rgb(102,204,255)')).toBe(hsl6);
  });
  test('无透明度的rgb', () => {
    expect(rgbToHsl(rgb6)).toBe(hsl6);
  });
  test('有透明度的rgb', () => {
    expect(rgbToHsl('rgb(102,204,255,0.6)')).toBe(hsl8);
  });
  test('小于15的rgb', () => {
    expect(rgbToHsl('rgb(12,204,255,1)')).toBe('hsl(193,100%,52%)');
  });
  test('格式错误rgb颜色1', () => {
    expect.assertions(1);
    expect(() => rgbToHsl('rgb')).toThrow('rgb格式错误');
  });
  test('格式错误rgb颜色2', () => {
    expect.assertions(1);
    expect(() => rgbToHsl('rgb(102,204)')).toThrow('rgb格式错误');
  });
});
