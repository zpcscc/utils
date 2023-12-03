import getType from 'src/getType';

/**
 * @name 检查“value”是否是“object”
 * @param {any} value 要判断的值
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isObject(value: any);
 * @example <caption>demo</caption>
import { isObject } from '@zpcscc/utils';

console.log(isObject({})); // true
console.log(isObject([1, 2, 3])); // false
console.log(isObject(undefined)); // false
console.log(isObject('')); // false
 */
const isObject = (value?: any): boolean => {
  const type = typeof value;
  return value != null && type === 'object' && getType(value) === 'Object';
};

export default isObject;
