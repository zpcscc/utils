import toString from 'src/toString';
import toHexColor from './toHexColor';
import toHslColor from './toHslColor';
import toRgbColor from './toRgbColor';

/**
 * @name 将“rgb”、“hsl”、“hex”的颜色格式互相转换,转换为指定的格式
 * @param {string} value “rgb”、“hsl”、“hex”格式的字符串
 * @returns {string} 返回转换为对应格式的颜色字符串
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
