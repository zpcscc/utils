import {
  hex10,
  hex7,
  hex8,
  hex9,
  hsl10,
  hsl7,
  hsl8,
  hsl9,
  rgb10,
  rgb7,
  rgb8,
  rgb9,
} from 'src/parseColor/parseColor.test';
import toColorHex from '.';

describe('toColorHex', () => {
  test('hsl-hex', () => {
    expect(toColorHex(hsl7)).toBe(hex7);
    expect(toColorHex(hsl8)).toBe(hex8);
    expect(toColorHex(hsl9)).toBe(hex9);
    expect(toColorHex(hsl10)).toBe(hex10);
  });
  test('rgb-hex', () => {
    expect(toColorHex(rgb7)).toBe(hex7);
    expect(toColorHex(rgb8)).toBe(hex8);
    expect(toColorHex(rgb9)).toBe(hex9);
    expect(toColorHex(rgb10)).toBe(hex10);
  });
  test('透明色', () => {
    expect(toColorHex('transparent')).toBe('#00000000');
  });
  test('报错提示', () => {
    expect.assertions(1);
    expect(() => toColorHex('#')).toThrow('hex格式错误');
  });
});
