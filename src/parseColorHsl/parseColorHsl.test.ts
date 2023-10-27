import { colorObj4, colorObj5, colorObj6, hsl4, hsl5, hsl6 } from 'src/parseColor/parseColor.test';
import parseColorHsl from '.';

describe('parseColorHsl', () => {
  expect(parseColorHsl(hsl4)).toStrictEqual(colorObj4);
  expect(parseColorHsl(hsl5)).toStrictEqual(colorObj5);
  expect(parseColorHsl(hsl6)).toStrictEqual(colorObj6);
});
