import { parseColorString, toRgbString } from './utils';

/**
 * @name hex颜色字符串转化为rgb颜色字符串
 * @param {string} hex hex颜色字符串
 * @returns {string} rgb颜色字符串
 */
const hexToRgb = (hex: string): string => {
  const colorObj = parseColorString(hex);
  return toRgbString(colorObj);
};

export default hexToRgb;
