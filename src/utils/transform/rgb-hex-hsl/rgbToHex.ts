import { parseColorString, toHexString } from './utils';

/**
 * @name rgb颜色字符串转化为hex颜色字符串
 * @param {string} rgb rgb颜色字符串
 * @returns {string} hex颜色字符串
 */
const rgbToHex = (rgb: string): string => {
  const colorObj = parseColorString(rgb);
  return toHexString(colorObj);
};

export default rgbToHex;
