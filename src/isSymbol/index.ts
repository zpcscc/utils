import getType from 'src/getType';

/**
 * @name 检查“value”是否是“Symbol“
 * @param {any} value 要判断的值
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isSymbol(value: any);
 * @example <caption>demo</caption>
import { isSymbol } from '@zpcscc/utils';

console.log(isSymbol(Symbol.iterator)); // true
console.log(isSymbol(Symbol(1))); // true
console.log(isSymbol()); // false
console.log(isSymbol('abc')); // false
 */
const isSymbol = (value?: any): boolean => {
  const type = typeof value;
  return type === 'symbol' || (type === 'object' && value != null && getType(value) === 'Symbol');
};

export default isSymbol;
