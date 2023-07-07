import { parseColorString, toHexString } from './utils';

/**
 * @name hsl颜色字符串转化为hsl颜色字符串
 * @param {string} hsl hsl颜色字符串
 * @returns {string} hsla颜色字符串
 */
const hslToHex = (hsl: string): string => {
  const colorObj = parseColorString(hsl);
  return toHexString(colorObj);
};

export default hslToHex;
