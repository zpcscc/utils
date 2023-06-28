import { isNil } from 'lodash';
import type { ColorObjType } from '../type';

/**
 * @name rgb颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
const parseRgbColor = (color: string) => {
  const arr = color?.match(/(\d(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => Number.parseInt(s, 10)).filter((n: number) => !isNil(n));
  if (res.length === 3 || res.length === 4) {
    return {
      r: res[0],
      g: res[1],
      b: res[2],
      a: Number.parseFloat(arr[3] || '1'),
    } as ColorObjType;
  }
  throw new Error('rgb格式错误');
};

export default parseRgbColor;
