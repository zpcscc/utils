import type { ColorObjType } from './type';
import { parseColorString } from './utils';

/**
 * @name 255颜色值转16进制颜色值
 * @param n 255颜色值
 * @returns hex 16进制颜色值
 */
const toHex = (n: number) => `${n > 15 ? '' : 0}${n.toString(16)}`;

/**
 * @name 颜色对象转化为16进制颜色字符串
 * @param colorObj 颜色对象
 */
const toHexString = (colorObj: ColorObjType) => {
  const { r, g, b, a } = colorObj;
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a === 1 ? '' : toHex(Math.floor(a * 255))}`;
};

/**
 * @name rgba颜色字符串转化为16进制颜色字符串
 * @param rgba rgba颜色字符串
 * @returns 16进制颜色字符串
 */
const rgbaToHex = (rgba: string) => {
  const colorObj = parseColorString(rgba);
  return toHexString(colorObj);
};

export default rgbaToHex;
