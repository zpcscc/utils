import { parseColorString, toHslString } from './utils';

/**
 * @name hex颜色字符串转化为hsl颜色字符串
 * @param {string} hex hex颜色字符串
 * @returns {string} hsla颜色字符串
 */
const hexToHsl = (hex: string): string => {
  const colorObj = parseColorString(hex);
  return toHslString(colorObj);
};

export default hexToHsl;
