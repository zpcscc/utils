import {
  hex10,
  hex7,
  hex8,
  hex9,
  hsl10,
  hsl5,
  hsl6,
  hsl7,
  hsl8,
  hsl9,
  rgb10,
  rgb5,
  rgb6,
  rgb7,
  rgb8,
} from 'src/parseColor/parseColor.test';
import toColorHsl from '.';

describe('toColorHsl', () => {
  test('hex-hsl', () => {
    expect(toColorHsl(hex7)).toBe(hsl7);
    expect(toColorHsl(hex8)).toBe(hsl8);
    expect(toColorHsl(hex9)).toBe(hsl9);
    expect(toColorHsl(hex10)).toBe(hsl10);
  });
  test('rgb-hsl', () => {
    expect(toColorHsl(rgb5)).toBe(hsl5);
    expect(toColorHsl(rgb6)).toBe(hsl6);
    expect(toColorHsl(rgb7)).toBe(hsl7);
    expect(toColorHsl(rgb8)).toBe(hsl8);
    expect(toColorHsl(rgb10)).toBe(hsl10);
  });
  test('透明色', () => {
    expect(toColorHsl('transparent')).toBe('hsl(0,0%,0%,0)');
  });
  test('报错提示', () => {
    expect.assertions(1);
    expect(() => toColorHsl('hsl(')).toThrow('hsl格式错误');
  });
});
