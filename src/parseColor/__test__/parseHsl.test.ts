import parseHsl from '../parseHsl';
import {
  colorObj2,
  colorObj3,
  colorObj4,
  colorObj5,
  colorObj6,
  hsl2,
  hsl3,
  hsl4,
  hsl5,
  hsl6
} from './index.test';

describe('parseHsl', () => {
  test('parseHsl', () => {
    expect(parseHsl(hsl2)).toStrictEqual(colorObj2);
    expect(parseHsl(hsl3)).toStrictEqual(colorObj3);
    expect(parseHsl(hsl4)).toStrictEqual(colorObj4);
    expect(parseHsl(hsl5)).toStrictEqual(colorObj5);
    expect(parseHsl(hsl6)).toStrictEqual(colorObj6);
  });
});
