import { isSymbol } from 'src';

/**
 * @name 将“value”转换为字符串
 * @param {*} value 要转换的值.
 * @returns {number} 返回转换后的数字.
 */
const toString = (value: any): string => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return `${value.map((other) => (other == null ? other : toString(other)))}`;
  }
  if (isSymbol(value)) return value.toString();
  const result = `${value}`;
  // eslint-disable-next-line eqeqeq
  return result === '0' && 1 / value == Number.NEGATIVE_INFINITY ? '-0' : result;
};

export default toString;
