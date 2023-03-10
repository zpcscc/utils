/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-throw-literal */
import { isNil } from 'lodash';
import type { ColorObjType } from './type';

/**
 * @name 255颜色值转16进制颜色值
 * @param n 255颜色值
 * @returns hex 16进制颜色值
 */
const toHex = (n: number) => `${n > 15 ? '' : 0}${n.toString(16)}`;

/**
 * @name 颜色对象转化为16进制颜色字符串
 * @param colorObj 颜色对象
 */
const toHexString = (colorObj: ColorObjType) => {
  const { r, g, b, a } = colorObj;
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a === 1 ? '' : toHex(Math.floor(a * 255))}`;
};

/**
 * @name 颜色对象转化为rgba颜色字符串
 * @param colorObj 颜色对象
 */
const toRgbaString = (colorObj: ColorObjType, n = 10000) => {
  const { r, g, b, a } = colorObj;
  return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
};

/**
 * @name 16进制颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns ColorObjType
 */
const parseHexColor = (color: string) => {
  let hex = color?.slice(1);
  let a = 1;
  switch (hex.length) {
    case 6:
      break;
    case 3:
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
      break;
    case 4:
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    // falls through
    case 8:
      a = parseInt(hex.slice(6), 16) / 255;
      hex = hex.slice(0, 6);
      break;
    default:
      throw String('hex格式错误');
  }

  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
    a,
  } as ColorObjType;
};

/**
 * @name rgba颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IColorObj
 */
const parseRgbaColor = (color: string) => {
  const arr = color?.match(/(\d(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => parseInt(s, 10)).filter((n: number) => !isNil(n));
  if (res.length === 3 || res.length === 4) {
    return {
      r: res[0],
      g: res[1],
      b: res[2],
      a: parseFloat(arr[3] || '1'),
    } as ColorObjType;
  }
  throw String('rgba格式错误');
};

/**
 * @name 颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns ColorObjType
 */
const parseColorString = (color: string) => {
  if (color?.startsWith('#')) {
    return parseHexColor(color);
  }
  if (color?.startsWith('rgb')) {
    return parseRgbaColor(color);
  }
  if (color === 'transparent') {
    return parseHexColor('#00000000');
  }
  throw String('颜色格式错误');
};

/**
 * @name 16进制颜色字符串转化为rgba颜色字符串
 * @param hex 16进制颜色字符串
 * @returns rgba颜色字符串
 */
export const hexToRgba = (hex: string) => {
  const colorObj = parseColorString(hex);
  return toRgbaString(colorObj);
};

/**
 * @name rgba颜色字符串转化为16进制颜色字符串
 * @param rgba rgba颜色字符串
 * @returns 16进制颜色字符串
 */
export const rgbaToHex = (rgba: string) => {
  const colorObj = parseColorString(rgba);
  return toHexString(colorObj);
};
