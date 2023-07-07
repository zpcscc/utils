import { parseColorString, toRgbString } from './utils';

/**
 * @name hsl颜色字符串转化为hsl颜色字符串
 * @param {string} hsl hsl颜色字符串
 * @returns {string} hsla颜色字符串
 */
const hslToRgb = (hsl: string): string => {
  const colorObj = parseColorString(hsl);
  return toRgbString(colorObj);
};

export default hslToRgb;
