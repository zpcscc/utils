import { type ColorObjType } from 'src/types';

/**
 * @name hex颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns ColorObjType
 */
const parseHex = (color: string) => {
  let hex = color?.slice(1);
  let a = 1;
  switch (hex.length) {
    case 6: {
      break;
    }
    case 3: {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
      break;
    }
    case 4: {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    // falls through
    case 8: {
      a = Number.parseInt(hex.slice(6), 16) / 255;
      hex = hex.slice(0, 6);
      break;
    }
    default: {
      return { r: 0, g: 0, b: 0, a: 0 };
    }
  }
  const bigint = Number.parseInt(hex, 16);
  return {
    // eslint-disable-next-line no-bitwise
    r: (bigint >> 16) & 255,
    // eslint-disable-next-line no-bitwise
    g: (bigint >> 8) & 255,
    // eslint-disable-next-line no-bitwise
    b: bigint & 255,
    a
  } as ColorObjType;
};

export default parseHex;
