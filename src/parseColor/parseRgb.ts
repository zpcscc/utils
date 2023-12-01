import isNil from 'src/isNil';
import type { ColorObjType } from 'src/z-transformColor/parseColor';

/**
 * @name rgb颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
const parseRgb = (color: string) => {
  const arr = color?.match(/(\d(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => Number.parseInt(s, 10)).filter((n: number) => !isNil(n));
  if (res.length === 3 || res.length === 4) {
    return {
      r: res[0],
      g: res[1],
      b: res[2],
      a: Number.parseFloat(Number(arr[3]) > 0 ? (Number(arr[3]) > 1 ? `0.${arr[3]}` : arr[3]) : '1')
    } as ColorObjType;
  }
  throw new Error('rgb格式错误');
};

export default parseRgb;
