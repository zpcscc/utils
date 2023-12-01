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
  rgb9
} from 'src/parseColor/__test__/parseColor.test';
import transformColor from '..';

// 透明色
export const colorObj = { a: 0, b: 0, g: 0, r: 0 };

describe('transformColor', () => {
  test('to-hex', () => {
    expect(transformColor(hsl7, 'hex')).toBe(hex7);
    expect(transformColor(hsl8, 'hex')).toBe(hex8);
    expect(transformColor(hsl9, 'hex')).toBe(hex9);
    expect(transformColor(hsl10, 'hex')).toBe(hex10);
    expect(transformColor(rgb5, 'hex')).toBe(hsl5);
    expect(transformColor(rgb6, 'hex')).toBe(hsl6);
    expect(transformColor(rgb7, 'hex')).toBe(hex7);
    expect(transformColor(rgb8, 'hex')).toBe(hex8);
    expect(transformColor(rgb9, 'hex')).toBe(hex9);
    expect(transformColor(rgb10, 'hex')).toBe(hex10);
    expect(transformColor(hex7, 'hex')).toBe(hsl7);
    expect(transformColor(hex8, 'hex')).toBe(hsl8);
    expect(transformColor(hex9, 'hex')).toBe(hsl9);
    expect(transformColor(hex10, 'hex')).toBe(hsl10);
  });

  test('to-rgb', () => {
    expect(transformColor(hex7, 'rgb')).toBe(rgb7);
    expect(transformColor(hex8, 'rgb')).toBe(rgb8);
    expect(transformColor(hex9, 'rgb')).toBe(rgb9);
    expect(transformColor(hex10, 'rgb')).toBe(rgb10);
    expect(transformColor(hsl7, 'rgb')).toBe(rgb7);
    expect(transformColor(hsl8, 'rgb')).toBe(rgb8);
    expect(transformColor(hsl9, 'rgb')).toBe(rgb9);
    expect(transformColor(hsl10, 'rgb')).toBe(rgb10);
  });
  test('to-hsl', () => {
    expect(transformColor(hex7, 'rgb')).toBe(hsl7);
    expect(transformColor(hex8, 'rgb')).toBe(hsl8);
    expect(transformColor(hex9, 'rgb')).toBe(hsl9);
    expect(transformColor(hex10, 'rgb')).toBe(hsl10);
    expect(transformColor(rgb5, 'rgb')).toBe(hsl5);
    expect(transformColor(rgb6, 'rgb')).toBe(hsl6);
    expect(transformColor(rgb7, 'rgb')).toBe(hsl7);
    expect(transformColor(rgb8, 'rgb')).toBe(hsl8);
    expect(transformColor(rgb10, 'rgb')).toBe(hsl10);
  });
  test('透明色', () => {
    expect(transformColor('transparent', 'rgb')).toBe('rgb(0,0,0,0)');
    expect(transformColor('transparent', 'hsl')).toBe('hsl(0,0%,0%,0)');
    expect(transformColor('transparent', 'hex')).toBe('#00000000');
  });
  test('报错提示', () => {
    expect.assertions(3);
    expect(() => transformColor('rgb', 'rgb')).toThrow('rgb格式错误');
    expect(() => transformColor('hsl(', 'hsl')).toThrow('hsl格式错误');
    expect(() => transformColor('#', 'hex')).toThrow('hex格式错误');
  });
});
