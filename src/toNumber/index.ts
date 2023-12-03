/**
 * @name 将“value”转换为有限数字
 * @param {any} data 要转换的值
 * @returns {number} 返回转换后的有限数字
 * @example <caption>ts类型</caption>
toNumber(value: any);
 * @example <caption>demo</caption>
import { toNumber } from '@zpcscc/utils';

console.log(toNumber(3.2)); // 3.2
console.log(toNumber('3.2')); // 3.2
console.log(toNumber(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toNumber(Number.MIN_VALUE)); // 5e-324
 */
const toNumber = (data: any): number => {
  let value = data;
  if (!value) return 0;
  try {
    value = Number(value);
    if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
      const sign = value < 0 ? -1 : 1;
      return sign * Number.MAX_VALUE;
    }
  } catch {
    return 0;
  }
  return Number.isNaN(value) ? 0 : value;
};

export default toNumber;
