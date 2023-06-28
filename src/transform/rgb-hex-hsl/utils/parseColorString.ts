import parseHexColor from './parseHexColor';
import parseRgbColor from './parseRgbColor';

/**
 * @name 颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns ColorObjType
 */
const parseColorString = (color: string) => {
  if (color?.startsWith('#')) {
    return parseHexColor(color);
  }
  if (color?.startsWith('rgb')) {
    return parseRgbColor(color);
  }
  if (color === 'transparent') {
    return parseHexColor('#00000000');
  }
  throw new Error('颜色格式错误');
};

export default parseColorString;
