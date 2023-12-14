import getType from 'src/getType';

/**
 * @name 检查“value”是否是有效“Number“
 * @description 排除 Infinity、-Infinity、MAX_VALUE、MIN_VALUE、NaN、
 * @param {any} value 要判断的值
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isNumber(value: any);
 * @example <caption>demo</caption>
import { isNumber } from '@zpcscc/utils';

console.log(isNumber()); // false
console.log(isNumber('')); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber(void 0)); // false
console.log(isNumber(Number.NaN); // false
console.log(isNumber(Number.POSITIVE_INFINITY); // false
console.log(isNumber(Number.NEGATIVE_INFINITY); // false
console.log(isNumber(1233); // true
console.log(isNumber(1233.345); // true
console.log(isNumber(0); // true
 */
const isNumber = (value?: any): boolean => {
  if (
    Number.isNaN(value) ||
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY ||
    value === Number.MAX_VALUE ||
    value === Number.MIN_VALUE
  ) {
    return false;
  }
  return typeof value === 'number' || getType(value) === 'Number';
};

export default isNumber;
