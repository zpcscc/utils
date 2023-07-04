import rgbToHex from '../rgbToHex';

// 6长度的hex
const hex6 = '#66ccff';
const rgb6 = 'rgb(102,204,255,1)';

// 长度为8的hex
const hex8 = '#66ccff99';

// rgb转hex
describe('rgbToHex', () => {
  test('rgb颜色', () => {
    expect(rgbToHex('rgb(102,204,255)')).toBe(hex6);
  });
  test('无透明度的rgb', () => {
    expect(rgbToHex(rgb6)).toBe(hex6);
  });
  test('有透明度的rgb', () => {
    expect(rgbToHex('rgb(102,204,255,0.6)')).toBe(hex8);
  });
  test('小于15的rgb', () => {
    expect(rgbToHex('rgb(12,204,255,1)')).toBe('#0cccff');
  });
  test('格式错误rgb颜色1', () => {
    expect.assertions(1);
    expect(() => rgbToHex('rgb')).toThrow('rgb格式错误');
  });
  test('格式错误rgb颜色2', () => {
    expect.assertions(1);
    expect(() => rgbToHex('rgb(102,204)')).toThrow('rgb格式错误');
  });
});
