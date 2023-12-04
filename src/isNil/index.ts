/**
 * @name 检查“value”是否是“null”或“undefined”
 * @param {any} value 要判断的值
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isNil(value: any);
 * @example <caption>demo</caption>
import { isNil } from '@zpcscc/utils';

console.log(isNil()); // true
console.log(isNil(null)); // true
console.log(isNil(undefined)); // true
console.log(isNil(void 0)); // true
console.log(isNil(Number.NaN); // false
console.log(isNil('')); // false
 */
const isNil = (value?: any): boolean => value == null;

export default isNil;
