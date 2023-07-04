import hexToHsl from '../hexToHsl';

// 长度为3的hex
const hex3 = '#66c';
const hsl3 = 'hsl(240,50%,60%)';

// 长度为4的hex
const hex4 = '#66cc';
const hsl4 = 'hsl(240,50%,60%,0.8)';

// 6长度的hex
// r最大,b > c
const hex6_r_1 = '#ff66cc';
const hsl6_r_1 = 'hsl(320,100%,70%)';
// b < c
const hex6_r_2 = '#ffcc66';
const hsl6_r_2 = 'hsl(40,100%,70%)';
// g最大
const hex6_g = '#66ffcc';
const hsl6_g = 'hsl(160,100%,70%)';
// b最大
const hex6_b = '#66ccff';
const hsl6_b = 'hsl(200,100%,70%)';

// light 小于 50%；
const hex6_light = '#226622';
const hsl6_light = 'hsl(120,50%,27%)';

// 长度为8的hex
const hex8 = '#66ccff99';
const hsl8 = 'hsl(200,100%,70%,0.6)';

// hex转hsl
describe('hexToHsl', () => {
  test('2位hex', () => {
    expect.assertions(1);
    expect(() => hexToHsl('#66')).toThrow('hex格式错误');
  });
  test('3位hex', () => {
    expect(hexToHsl(hex3)).toBe(hsl3);
  });
  test('4位hex', () => {
    expect(hexToHsl(hex4)).toBe(hsl4);
  });
  test('6位hex-r最大,b > c', () => {
    expect(hexToHsl(hex6_r_1)).toBe(hsl6_r_1);
  });
  test('6位hex-r最大,b < c', () => {
    expect(hexToHsl(hex6_r_2)).toBe(hsl6_r_2);
  });
  test('6位hex-g最大', () => {
    expect(hexToHsl(hex6_g)).toBe(hsl6_g);
  });
  test('6位hex-b最大', () => {
    expect(hexToHsl(hex6_b)).toBe(hsl6_b);
  });
  test('6位hex-相等', () => {
    expect(hexToHsl(hex6_light)).toBe(hsl6_light);
  });
  test('8位hex', () => {
    expect(hexToHsl(hex8)).toBe(hsl8);
  });
  test('透明色', () => {
    expect(hexToHsl('transparent')).toBe('hsl(0,0%,0%,0)');
  });
  test('其他字符串', () => {
    expect.assertions(1);
    expect(() => hexToHsl('red')).toThrow('颜色格式错误');
  });
});
