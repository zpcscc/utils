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
import transformColor from '..';

describe('transformColor', () => {
  test('to-hex', () => {
    expect(transformColor(hsl7, 'hex')).toBe(hex7);
    expect(transformColor(hsl8, 'hex')).toBe(hex8);
    expect(transformColor(hsl9, 'hex')).toBe(hex9);
    expect(transformColor(hsl10, 'hex')).toBe(hex10);
    expect(transformColor(rgb5, 'hex')).toBe(hex5);
    expect(transformColor(rgb6, 'hex')).toBe(hex6);
    expect(transformColor(rgb7, 'hex')).toBe(hex7);
    expect(transformColor(rgb8, 'hex')).toBe(hex8);
    expect(transformColor(rgb9, 'hex')).toBe(hex9);
    expect(transformColor(rgb10, 'hex')).toBe(hex10);
    expect(transformColor(hex7, 'hex')).toBe(hex7);
    expect(transformColor(hex8, 'hex')).toBe(hex8);
    expect(transformColor(hex9, 'hex')).toBe(hex9);
    expect(transformColor(hex10, 'hex')).toBe(hex10);
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
    expect(transformColor(hex7, 'hsl')).toBe(hsl7);
    expect(transformColor(hex8, 'hsl')).toBe(hsl8);
    expect(transformColor(hex9, 'hsl')).toBe(hsl9);
    expect(transformColor(hex10, 'hsl')).toBe(hsl10);
    expect(transformColor(rgb5, 'hsl')).toBe(hsl5);
    expect(transformColor(rgb6, 'hsl')).toBe(hsl6);
    expect(transformColor(rgb7, 'hsl')).toBe(hsl7);
    expect(transformColor(rgb8, 'hsl')).toBe(hsl8);
    expect(transformColor(rgb10, 'hsl')).toBe(hsl10);
  });
  test('透明色', () => {
    expect(transformColor('transparent', 'rgb')).toBe('rgb(0,0,0,0)');
    expect(transformColor('transparent', 'hsl')).toBe('hsl(0,0%,0%,0)');
    expect(transformColor('transparent', 'hex')).toBe('#00000000');
  });
  test('空类型', () => {
    // @ts-expect-error 测试空类型
    expect(transformColor(rgb10)).toBe(rgb10);
  });
});