import { colorObj4, colorObj5, colorObj6, hex4, hex5, hex6 } from 'src/parseColor/parseColor.test';
import parseColorHex from '.';

describe('parseColorHex', () => {
  expect(parseColorHex(hex4)).toStrictEqual(colorObj4);
  expect(parseColorHex(hex5)).toStrictEqual(colorObj5);
  expect(parseColorHex(hex6)).toStrictEqual(colorObj6);
});
