import parseRgb from '../parseRgb';
import {
  colorObj2,
  colorObj3,
  colorObj4,
  colorObj5,
  colorObj6,
  rgb2,
  rgb3,
  rgb3_1,
  rgb4,
  rgb4_1,
  rgb5,
  rgb6
} from './index.test';

describe('parseRgb', () => {
  test('parseRgb', () => {
    expect(parseRgb(rgb2)).toStrictEqual(colorObj2);
    expect(parseRgb(rgb3)).toStrictEqual(colorObj3);
    expect(parseRgb(rgb3_1)).toStrictEqual(colorObj3);
    expect(parseRgb(rgb4)).toStrictEqual(colorObj4);
    expect(parseRgb(rgb4_1)).toStrictEqual(colorObj4);
    expect(parseRgb(rgb5)).toStrictEqual(colorObj5);
    expect(parseRgb(rgb6)).toStrictEqual(colorObj6);
  });
});
