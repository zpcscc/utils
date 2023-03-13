import type { ColorObjType } from './type';
import { parseColorString } from './utils';

/**
 * @name 颜色对象转化为rgba颜色字符串
 * @param colorObj 颜色对象
 */
const toRgbaString = (colorObj: ColorObjType, n = 10000) => {
  const { r, g, b, a } = colorObj;
  return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
};

/**
 * @name 16进制颜色字符串转化为rgba颜色字符串
 * @param hex 16进制颜色字符串
 * @returns rgba颜色字符串
 */
const hexToRgba = (hex: string) => {
  const colorObj = parseColorString(hex);
  return toRgbaString(colorObj);
};

export default hexToRgba;
