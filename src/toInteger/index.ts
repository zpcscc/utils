import toNumber from 'src/toNumber';

/**
 * @name 将“value”转为整数
 * @param {any} value 要转换的值
 * @returns {number} 返回转换后的整数
 * @example <caption>ts类型</caption>
toInteger(value: any);
 * @example <caption>demo</caption>
import { toInteger } from '@zpcscc/utils';

console.log(toInteger(3.2)); // 3
console.log(toInteger('3.2')); // 3
console.log(toInteger(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toInteger(Number.MIN_VALUE)); // 0
 */
const toInteger = (value: any): number => {
  const result = toNumber(value);
  const remainder = result % 1;
  return remainder ? result - remainder : result;
};

export default toInteger;
