import type { ColorObjType } from '../type';

/**
 * @name 255颜色值转hex颜色值
 * @param n 255颜色值
 * @returns hex hex颜色值
 */
const toHex = (n: number) => `${n > 15 ? '' : 0}${n.toString(16)}`;

/**
 * @name 颜色对象转化为hex颜色字符串
 * @param colorObj 颜色对象
 */
const toHexString = (colorObj: ColorObjType) => {
  const { r, g, b, a } = colorObj;
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a === 1 ? '' : toHex(Math.floor(a * 255))}`;
};

export default toHexString;
