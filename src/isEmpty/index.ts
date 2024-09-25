import getType from 'src/getType';
import isNumber from 'src/isNumber';

/**
 * @name isEmpty
 * @description 判断数据是否为空
 * @param {any} value 需要检查的数据
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isEmpty(value: any);
 * @example <caption>demo</caption>
import { isEmpty } from '@zpcscc/utils';

console.log(isEmpty()); // true
console.log(isEmpty('')); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(void 0)); // true
console.log(isEmpty(Number.NaN); // true
console.log(isEmpty(123); // false
console.log(isEmpty('123'); // false
console.log(isEmpty({}); // true
console.log(isEmpty([]); // true
console.log(isEmpty({a:1}); // false
console.log(isEmpty([1,2,3]); // false
console.log(isEmpty(new Map([[1,2],[3,4]])); // false
console.log(isEmpty(new Set([1,2,3])); // false
 */
const isEmpty = (value?: any): boolean => {
  if (value === null || value === undefined) return true;
  if (isNumber(value)) return false;
  if (
    Array.isArray(value) ||
    typeof value === 'string' ||
    typeof value.splice === 'function' ||
    getType(value) === 'Arguments'
  ) {
    return value.length === 0;
  }
  const tag = getType(value);
  if (tag === 'Map' || tag === 'Set') {
    return value.size === 0;
  }
  for (const key in value) {
    /* istanbul ignore next */
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
};

export default isEmpty;
