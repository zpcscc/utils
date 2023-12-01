import parseColorHex from './parseHex';
import parseColorHsl from './parseHsl';
import parseColorRgb from './parseRgb';

export type ColorObjType = {
  r: number;
  g: number;
  b: number;
  a: number;
};

/**
 * @name 将‘rgb’、‘hex’、‘hsl’颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns ColorObjType
 */
const parseColor = (color: string) => {
  if (color?.startsWith('#')) {
    return parseColorHex(color);
  }
  if (color?.startsWith('rgb')) {
    return parseColorRgb(color);
  }
  if (color?.startsWith('hsl')) {
    return parseColorHsl(color);
  }
  if (color === 'transparent') {
    return parseColorHex('#00000000');
  }
  throw new Error('颜色格式错误');
};

export default parseColor;
