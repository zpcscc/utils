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
  rgb9
} from 'src/parseColor/parseColor.test';
import toColorRgb from '.';

describe('toColorRgb', () => {
  test('hex-rgb', () => {
    expect(toColorRgb(hex7)).toBe(rgb7);
    expect(toColorRgb(hex8)).toBe(rgb8);
    expect(toColorRgb(hex9)).toBe(rgb9);
    expect(toColorRgb(hex10)).toBe(rgb10);
  });
  test('hsl-rgb', () => {
    expect(toColorRgb(hsl7)).toBe(rgb7);
    expect(toColorRgb(hsl8)).toBe(rgb8);
    expect(toColorRgb(hsl9)).toBe(rgb9);
    expect(toColorRgb(hsl10)).toBe(rgb10);
  });
  test('透明色', () => {
    expect(toColorRgb('transparent')).toBe('rgb(0,0,0,0)');
  });
  test('报错提示', () => {
    expect.assertions(1);
    expect(() => toColorRgb('rgb')).toThrow('rgb格式错误');
  });
});
