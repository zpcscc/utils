import { type ColorObjType } from 'src/types';
import parseColorHex from './parseHex';
import parseColorHsl from './parseHsl';
import parseColorRgb from './parseRgb';

/**
 * @name parseColor
 * @description 将‘rgb’、‘hex’、‘hsl’颜色字符串解析为颜色对象
 * @param {string} value 颜色字符串
 * @returns {ColorObjType} rgba颜色对象; 例：{ r: 102, g: 204, b: 255, a: 1 }
 * @example <caption>ts类型</caption>
parseColor(value: string);
 * @example <caption>demo</caption>
import { parseColor } from '@zpcscc/utils';

console.log(parseColor('#6666cc')); // { r: 102, g: 102, b: 204, a: 1 };
console.log(parseColor('rgb(102,204,255)')); // { r: 102, g: 204, b: 255, a: 1 }
console.log(parseColor('hsl(320,100%,70%)')); // { r: 255, g: 102, b: 204, a: 1 }
 */
const parseColor = (value: string): ColorObjType => {
  if (value?.startsWith('#')) {
    return parseColorHex(value);
  }
  if (value?.startsWith('rgb')) {
    return parseColorRgb(value);
  }
  if (value?.startsWith('hsl')) {
    return parseColorHsl(value);
  }
  if (value === 'transparent') {
    return parseColorHex('#00000000');
  }
  return { r: 0, g: 0, b: 0, a: 0 };
};

export default parseColor;
