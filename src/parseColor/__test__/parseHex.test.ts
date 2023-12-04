import parseHex from '../parseHex';
import {
  colorObj1,
  colorObj2,
  colorObj3,
  colorObj4,
  colorObj5,
  colorObj6,
  hex1_1,
  hex2,
  hex2_1,
  hex3,
  hex4,
  hex5,
  hex6
} from './index.test';

describe('parseHex', () => {
  test('parseHex', () => {
    expect(parseHex(hex1_1)).toStrictEqual(colorObj1);
    expect(parseHex(hex2)).toStrictEqual(colorObj2);
    expect(parseHex(hex2_1)).toStrictEqual(colorObj2);
    expect(parseHex(hex3)).toStrictEqual(colorObj3);
    expect(parseHex(hex4)).toStrictEqual(colorObj4);
    expect(parseHex(hex5)).toStrictEqual(colorObj5);
    expect(parseHex(hex6)).toStrictEqual(colorObj6);
  });
});
