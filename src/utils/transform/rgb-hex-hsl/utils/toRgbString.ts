import type { ColorObjType } from '../type';

/**
 * @name 颜色对象转化为rgb颜色字符串
 * @param colorObj 颜色对象
 * @return {string}
 */
const toRgbString = (colorObj: ColorObjType): string => {
  const { r, g, b } = colorObj;
  const a = Math.floor(colorObj.a * 10000) / 10000;
  return `rgb(${r},${g},${b}${a === 1 ? '' : `,${a}`})`;
};

export default toRgbString;
