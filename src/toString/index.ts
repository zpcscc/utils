import { isObject, isSymbol } from 'src';

/**
 * @name 将各种格式的数据转为string
 * @param {any} data 需要转换的数据
 * @param {object} stringifyArgs 其他参数，用于传入JSON.stringify
 * @returns {string} 转换后的字符串数据
 * @example <caption>ts类型</caption>
toString(data:any, stringifyArgs?:any);
 * @example <caption>demo</caption>
import { toString } from '@zpcscc/utils';

console.log(toString(true)); // 'true'
console.log(toString(null)); // ''
console.log(toString()); // ''
console.log(toString(undefined)); // ''
console.log(toString(0)); // '0'
console.log(toString(-0)); // '-0'
console.log(toString(123)); // '123'
console.log(toString(() => {})); // '()=>{}'
console.log(toString([])); // '[]'
console.log(toString({})); // '{}'
console.log(toString(Symbol(1))); // 'Symbol(1)'

// stringifyArgs参数, 相当于，JSON.stringify([1,2,3], null, 2));
console.log(toString([1,2,3], null, 2));
// `[
//   1,
//   2,
//   3
// ]`

// 部分数据因为赋值给函数时，已被浏览器自动调整，故无法完整原样转为字符串。
console.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
console.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'
console.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'
console.log(toString(Number.MIN_VALUE)); // '5e-324'
 */
const toString = (data: any, ...stringifyArgs: any[]): string => {
  if (data === null) return '';
  if (data === undefined) return '';
  if (typeof data === 'string') return data;
  let str = '';
  // 将对应的数据格式处理为初步的字符串
  if (typeof data === 'number' || typeof data === 'boolean') {
    str = `${data}`;
  } else if (isSymbol(data)) {
    str = data.toString();
  } else if (Array.isArray(data) || isObject(data)) {
    str = JSON.stringify(data, ...stringifyArgs);
  } else {
    str = String(data);
  }
  // 针对初步的字符串，如果有不符合格式的，继续处理
  if (`${str}` === '0' && 1 / data === Number.NEGATIVE_INFINITY) {
    str = '-0';
  }
  return str;
};

export default toString;
