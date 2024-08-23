import isNumber from 'src/isNumber';

/**
 * @name toNumber
 * @description 将“value”转换为有效数字;排除了 Infinity、-Infinity、NaN，这类非正常数字，全部返回 0
 * @param {any} data 要转换的值
 * @returns {number} 返回转换后的有限数字
 * @example <caption>ts类型</caption>
toNumber(value: any);
 * @example <caption>demo</caption>
import { toNumber } from '@zpcscc/utils';

console.log(toNumber(3.2)); // 3.2
console.log(toNumber('3.2')); // 3.2
console.log(toNumber(Number.POSITIVE_INFINITY)); // 0
console.log(toNumber(Number.MIN_VALUE)); // 0
console.log(toNumber(Number.NaN)); // 0
 */
const toNumber = (data: any): number => {
  if (!data) return 0;
  if (isNumber(data)) return data;
  let value = data;
  try {
    if (
      data === Number.POSITIVE_INFINITY ||
      data === Number.NEGATIVE_INFINITY ||
      data === Number.MAX_VALUE ||
      data === Number.MIN_VALUE ||
      Number.isNaN(data)
    ) {
      return 0;
    }
    value = Number(data);
  } catch {
    return 0;
  }
  return Number.isNaN(value) ? 0 : value;
};

export default toNumber;
