// 支持的可返回的数据类型
export type DataType =
  | 'Array'
  | 'Arguments'
  | 'Boolean'
  | 'Date'
  | 'Error'
  | 'Function'
  | 'Map'
  | 'Null'
  | 'Number'
  | 'Object'
  | 'RegExp'
  | 'Set'
  | 'String'
  | 'Symbol'
  | 'Undefined';

/**
 * @name 获取数据类型
 * @param {any} data 需要判断类型的数据
 * @return {string} 返回对应的类型 `Array`、`Boolean`、`Date`、`Error`、`Function`、`Map`、`Null`、`Number`、`RegExp`、`Set`、`String`、`Symbol`、`Undefined`、`Arguments`
 * @example <caption>ts类型</caption>
getType(value:any)
 * @example <caption>demo</caption>
import { getType } from '@zpcscc/utils';

console.log(getType([]));               // 'Array';
console.log(getType(true));             // 'Boolean';
console.log(getType(new Date()));       // 'Date';
console.log(getType(new Error()));      // 'Error';
console.log(getType(()=>{}));           // 'Function';
console.log(getType(new Map()));        // 'Map';
console.log(getType(null));             // 'Null';
console.log(getType(123));              // 'Number';
console.log(getType(/[hello]/g));       // 'RegExp';
console.log(getType(new Set()));        // 'Set';
console.log(getType(Symbol.iterator));  // 'Symbol';
console.log(getType('字符串'));          // 'String';
console.log(getType(undefined));        // 'Undefined';

function () {
  console.log(getType(arguments));      // 'Arguments';
}
 */
const getType = (data?: any): DataType & string => {
  return Object.prototype.toString.call(data).slice(8, -1) as DataType;
};

export default getType;
