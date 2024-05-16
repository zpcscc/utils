import {
  hex10,
  hex5,
  hex6,
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
} from 'src/parseColor/__test__/index.test';
import toColor from '..';

describe('toColor', () => {
  test('to-hex', () => {
    expect(toColor(hsl7, 'hex')).toBe(hex7);
    expect(toColor(hsl8, 'hex')).toBe(hex8);
    expect(toColor(hsl9, 'hex')).toBe(hex9);
    expect(toColor(hsl10, 'hex')).toBe(hex10);
    expect(toColor(rgb5, 'hex')).toBe(hex5);
    expect(toColor(rgb6, 'hex')).toBe(hex6);
    expect(toColor(rgb7, 'hex')).toBe(hex7);
    expect(toColor(rgb8, 'hex')).toBe(hex8);
    expect(toColor(rgb9, 'hex')).toBe(hex9);
    expect(toColor(rgb10, 'hex')).toBe(hex10);
    expect(toColor(hex7, 'hex')).toBe(hex7);
    expect(toColor(hex8, 'hex')).toBe(hex8);
    expect(toColor(hex9, 'hex')).toBe(hex9);
    expect(toColor(hex10, 'hex')).toBe(hex10);
  });

  test('to-rgb', () => {
    expect(toColor(hex7, 'rgb')).toBe(rgb7);
    expect(toColor(hex8, 'rgb')).toBe(rgb8);
    expect(toColor(hex9, 'rgb')).toBe(rgb9);
    expect(toColor(hex10, 'rgb')).toBe(rgb10);
    expect(toColor(hsl7, 'rgb')).toBe(rgb7);
    expect(toColor(hsl8, 'rgb')).toBe(rgb8);
    expect(toColor(hsl9, 'rgb')).toBe(rgb9);
    expect(toColor(hsl10, 'rgb')).toBe(rgb10);
  });
  test('to-hsl', () => {
    expect(toColor(hex7, 'hsl')).toBe(hsl7);
    expect(toColor(hex8, 'hsl')).toBe(hsl8);
    expect(toColor(hex9, 'hsl')).toBe(hsl9);
    expect(toColor(hex10, 'hsl')).toBe(hsl10);
    expect(toColor(rgb5, 'hsl')).toBe(hsl5);
    expect(toColor(rgb6, 'hsl')).toBe(hsl6);
    expect(toColor(rgb7, 'hsl')).toBe(hsl7);
    expect(toColor(rgb8, 'hsl')).toBe(hsl8);
    expect(toColor(rgb10, 'hsl')).toBe(hsl10);
  });
  test('透明色', () => {
    expect(toColor('transparent', 'rgb')).toBe('rgb(0,0,0,0)');
    expect(toColor('transparent', 'hsl')).toBe('hsl(0,0%,0%,0)');
    expect(toColor('transparent', 'hex')).toBe('#00000000');
  });
  test('空类型', () => {
    // @ts-expect-error 测试空类型
    expect(toColor(rgb10)).toBe(rgb10);
  });
});
