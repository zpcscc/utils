import toString from 'src/toString';
import toHexColor from './toHexColor';
import toHslColor from './toHslColor';
import toRgbColor from './toRgbColor';

/**
 * @name 将“rgb”、“hsl”、“hex”的颜色格式互相转换，转换为指定的格式123
 * @param {string} value “rgb”、“hsl”、“hex”格式的字符串
 * @param {string} type “rgb”、“hsl”、“hex”
 * @returns {string} 返回转换为对应格式的颜色字符串
 * @example <caption>ts类型</caption>
transformColor(data:string, type: 'rgb' | 'hsl' | 'hex');
 * @example <caption>demo</caption>
import { transformColor } from '@zpcscc/utils';

console.log(transformColor('#6666cc','rgb')); // rgb(102,102,204);
console.log(transformColor('rgb(102,102,204)','hex')); // #6666cc;
console.log(transformColor('#6666cc','hsl')); // hsl(240,50%,60%);
 */
const transformColor = (value: string, type: 'rgb' | 'hsl' | 'hex'): string => {
  const stringColor = toString(value);
  switch (type) {
    case 'rgb': {
      return toRgbColor(stringColor);
    }
    case 'hsl': {
      return toHslColor(stringColor);
    }
    case 'hex': {
      return toHexColor(stringColor);
    }
    default: {
      return stringColor;
    }
  }
};

export default transformColor;
