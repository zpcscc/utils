import type { ColorObjType } from './type';
import { parseColorString } from './utils';

/**
 * @name 颜色对象转化为rgb颜色字符串
 * @param colorObj 颜色对象
 * @return {string}
 */
const toRgbString = (colorObj: ColorObjType): string => {
  const { r, g, b } = colorObj;
  const a = Math.floor(colorObj.a * 10000) / 10000;
  return `rgb(${r},${g},${b}${a === 1 ? '' : `,${a}`})`;
};

/**
 * @name 16进制颜色字符串转化为rgb颜色字符串
 * @param {string} hex 16进制颜色字符串
 * @returns {string} rgb颜色字符串
 */
const hexToRgb = (hex: string): string => {
  const colorObj = parseColorString(hex);
  return toRgbString(colorObj);
};

export default hexToRgb;
