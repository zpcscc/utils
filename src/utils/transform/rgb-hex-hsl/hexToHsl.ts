import type { ColorObjType } from './type';
import { parseColorString } from './utils';

/**
 * @name 颜色对象转化为16进制颜色字符串
 * @param colorObj 颜色对象
 */
const toHslString = (colorObj: ColorObjType) => {
  const r = colorObj.r / 255;
  const g = colorObj.g / 255;
  const b = colorObj.b / 255;
  const a = Math.floor(colorObj.a * 10000) / 10000;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    console.log('l:', max, min, l);
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      }
      case g: {
        h = (b - r) / d + 2;
        break;
      }
      case b: {
        h = (r - g) / d + 4;
        break;
      }
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h},${s}%,${l}%${a === 1 ? '' : `,${a}`})`;
};

/**
 * @name hex颜色字符串转化为hsla颜色字符串
 * @param {string} hex 16进制颜色字符串
 * @returns {string} hsla颜色字符串
 */
const hexToHsl = (hex: string): string => {
  const colorObj = parseColorString(hex);
  return toHslString(colorObj);
};

export default hexToHsl;
