import hslToHex from '../hslToHex';

// 长度为3的hex
const hex3 = '#6666cc';
const hsl3 = 'hsl(240,50%,60%)';

// 长度为4的hex
const hex4 = '#6666cccc';
const hsl4 = 'hsl(240,50%,60%,0.8)';

// 6长度的hex
// r最大,b > c
const hex6_r_1 = '#ff66cc';
const hsl6_r_1 = 'hsl(320,100%,70%)';
// b < c
const hex6_r_2 = '#b3b3b3';
const hsl6_r_2 = 'hsl(40,0%,70%)';
// g最大
const hex6_g = '#66ffcc';
const hsl6_g = 'hsl(160,100%,70%)';
// b最大
const hex6_b = '#66ccff';
const hsl6_b = 'hsl(200,100%,70%)';

// light 小于 50%；
const hex6_light = '#226722';
const hsl6_light = 'hsl(120,50%,27%)';

// 长度为8的hex
const hex8 = '#66ccff99';
const hsl8 = 'hsl(200,100%,70%,0.6)';

// hex转hsl
describe('hslToHex', () => {
  test('2位hex', () => {
    expect.assertions(1);
    expect(() => hslToHex('hsl(')).toThrow('hsl格式错误');
  });
  test('hsl-3位hex', () => {
    expect(hslToHex(hsl3)).toBe(hex3);
  });
  test('hsl-4位hex', () => {
    expect(hslToHex(hsl4)).toBe(hex4);
  });
  test('hsl-6位hex-r最大,b > c', () => {
    expect(hslToHex(hsl6_r_1)).toBe(hex6_r_1);
  });
  test('hsl-6位hex-r最大,b < c', () => {
    expect(hslToHex(hsl6_r_2)).toBe(hex6_r_2);
  });
  test('hsl-6位hex-g最大', () => {
    expect(hslToHex(hsl6_g)).toBe(hex6_g);
  });
  test('hex-6位hex-b最大', () => {
    expect(hslToHex(hsl6_b)).toBe(hex6_b);
  });
  test('hex-6位hex-相等', () => {
    expect(hslToHex(hsl6_light)).toBe(hex6_light);
  });
  test('hex-8位hex', () => {
    expect(hslToHex(hsl8)).toBe(hex8);
  });
  test('透明色', () => {
    expect(hslToHex('transparent')).toBe('#00000000');
  });
  test('其他字符串', () => {
    expect.assertions(1);
    expect(() => hslToHex('red')).toThrow('颜色格式错误');
  });
});
