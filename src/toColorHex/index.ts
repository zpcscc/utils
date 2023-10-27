import parseColor from 'src/parseColor';
import toHex from 'src/toHex';

/**
 * @name 将“rgb”、“hsl”的颜色格式，转为“hex”的格式
 * @param {string} string “rgb”、“hsl”格式的字符串
 * @returns {string} hex颜色字符串
 */
const toColorHex = (string: string): string => {
  const colorObj = parseColor(string);
  const { r, g, b, a } = colorObj;
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a === 1 ? '' : toHex(Math.floor(a * 255))}`;
};

export default toColorHex;
