import parseColor from 'src/parseColor';

/**
 * @name 将“hex”、“hsl”的颜色格式，转为“rgb”的格式
 * @param {string} string “hex”、“hsl”格式的字符串
 * @returns {string} rgb颜色字符串
 */
const toColorRgb = (string: string): string => {
  const colorObj = parseColor(string);
  const { r, g, b } = colorObj;
  const a = Math.floor(colorObj.a * 10000) / 10000;
  return `rgb(${r},${g},${b}${a === 1 ? '' : `,${a}`})`;
};

export default toColorRgb;
