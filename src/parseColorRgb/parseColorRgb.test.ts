import {
  colorObj4,
  colorObj5,
  colorObj6,
  rgb4,
  rgb4_1,
  rgb5,
  rgb6,
} from 'src/parseColor/parseColor.test';
import parseColorRgb from '.';

describe('parseColorRgb', () => {
  test('parseRgb', () => {
    expect(parseColorRgb(rgb4)).toStrictEqual(colorObj4);
    expect(parseColorRgb(rgb4_1)).toStrictEqual(colorObj4);
    expect(parseColorRgb(rgb5)).toStrictEqual(colorObj5);
    expect(parseColorRgb(rgb6)).toStrictEqual(colorObj6);
  });
});
