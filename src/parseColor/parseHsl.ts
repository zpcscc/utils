import isNil from 'src/isNil';
import { type ColorObjType } from 'src/types';

/**
 * @name hsl颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
const parseHsl = (color: string) => {
  const arr = color?.match(/(\d(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => Number.parseInt(s, 10)).filter((n: number) => !isNil(n));
  const h = res[0] / 360;
  const s = res[1] / 100;
  const l = res[2] / 100;
  let r = 0;
  let g = 0;
  let b = 0;
  const a = Number.parseFloat(
    Number(arr[3]) > 0 ? (Number(arr[3]) > 1 ? `0.${arr[3]}` : arr[3]) : '1'
  );

  if (res.length === 3 || res.length === 4) {
    let t3: number;
    let val: number;
    if (s === 0) {
      val = l * 255;
      r = g = b = val;
    }
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + (1 / 3) * -(i - 1);
      if (t3 < 0) t3++;
      if (t3 > 1) t3--;
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    r = Math.round(rgb[0]);
    g = Math.round(rgb[1]);
    b = Math.round(rgb[2]);
    return { r, g, b, a } as ColorObjType;
  }
  console.error('hsl格式错误');
  return { r: 0, g: 0, b: 0, a: 0 };
};

export default parseHsl;
