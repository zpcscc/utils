import { type ColorObjType } from 'src/types';

/**
 * @name rgb颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
const parseRgb = (color: string) => {
  const arr = color?.match(/(\d(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => Number.parseInt(s, 10)).filter((n: number) => n != null);
  if (res.length === 3 || res.length === 4) {
    return {
      r: res[0],
      g: res[1],
      b: res[2],
      a: Number.parseFloat(Number(arr[3]) > 0 ? (Number(arr[3]) > 1 ? `0.${arr[3]}` : arr[3]) : '1')
    } as ColorObjType;
  }
  console.error('rgb格式错误');
  return { r: 0, g: 0, b: 0, a: 0 };
};

export default parseRgb;
