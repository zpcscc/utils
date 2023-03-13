import hexToRgba from '../hexToRgba';
import rgbaToHex from '../rgbaToHex';

// 长度为3的hex
const hex3 = '#66c';
const rgba3 = 'rgba(102,102,204,1)';

// 长度为4的hex
const hex4 = '#66cc';
const rgba4 = 'rgba(102,102,204,0.8)';

// 6长度的hex
const hex6 = '#66ccff';
const rgba6 = 'rgba(102,204,255,1)';

// 长度为8的hex
const hex8 = '#66ccff99';
const rgba8 = 'rgba(102,204,255,0.6)';

// hex转rgba
describe('hexToRgba', () => {
  test('2位hex', () => {
    expect.assertions(1);
    try {
      hexToRgba('#66');
    } catch (msg) {
      expect(msg).toBe('hex格式错误');
    }
  });
  test('3位hex', () => {
    expect(hexToRgba(hex3)).toBe(rgba3);
  });
  test('4位hex', () => {
    expect(hexToRgba(hex4)).toBe(rgba4);
  });
  test('6位hex', () => {
    expect(hexToRgba(hex6)).toBe(rgba6);
  });
  test('8位hex', () => {
    expect(hexToRgba(hex8)).toBe(rgba8);
  });
  test('透明色', () => {
    expect(hexToRgba('transparent')).toBe('rgba(0,0,0,0)');
  });
  test('其他字符串', () => {
    expect.assertions(1);
    try {
      hexToRgba('red');
    } catch (msg) {
      expect(msg).toBe('颜色格式错误');
    }
  });
});

// rgba转hex
describe('rgbaToHex', () => {
  test('rgb颜色', () => {
    expect(rgbaToHex('rgb(102,204,255)')).toBe(hex6);
  });
  test('无透明度的rgba', () => {
    expect(rgbaToHex(rgba6)).toBe(hex6);
  });
  test('有透明度的rgba', () => {
    expect(rgbaToHex('rgb(102,204,255,0.6)')).toBe(hex8);
  });
  test('小于15的rgba', () => {
    expect(rgbaToHex('rgba(12,204,255,1)')).toBe('#0cccff');
  });
  test('格式错误rgb颜色1', () => {
    expect.assertions(1);
    try {
      rgbaToHex('rgb');
    } catch (msg) {
      expect(msg).toBe('rgba格式错误');
    }
  });
  test('格式错误rgb颜色2', () => {
    expect.assertions(1);
    try {
      rgbaToHex('rgb(102,204)');
    } catch (msg) {
      expect(msg).toBe('rgba格式错误');
    }
  });
});
