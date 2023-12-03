/**
 * @name 将string转为json等数据
 * @param {string} str 需要转换的字符串
 * @param {Object} parseArgs 其他参数，用于传入JSON.parse
 * @returns {any} 返回对应格式的数据
 * @example <caption>ts类型</caption>
toData(data:string, reviver?:any);
 * @example <caption>demo</caption>
import { toData } from '@zpcscc/utils';

console.log(toData('1')); // 1
console.log(toData('true')); // true
console.log(toData('{}')); // {}
console.log(toData('[]')); // []
console.log(toData('null')); // null
console.log(toData('undefined')); // undefined
 */
// 字符串类型的数据转成真正对应格式的数据
const toData = (str: any, ...parseArgs: any): any => {
  if (typeof str !== 'string') return str;
  if (str === '') return '';
  if (str === 'true') return true;
  if (str === 'false') return false;
  const value = Number(str);
  if (!Number.isNaN(value)) return value;
  try {
    return JSON.parse(str, ...parseArgs);
  } catch {
    return str;
  }
};

export default toData;
