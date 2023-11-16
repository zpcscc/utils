import { isObject, isSymbol } from 'src';

/**
 * @name 将各种格式的数据转为string
 * @param {any} data 需要转换的数据
 * @param stringifyArgs 其他参数，用于传入stringify
 * @returns {string} 转换后的字符串数据
 */
const toString = (data: any, ...stringifyArgs: any[]): string => {
  if (data === null) return 'null';
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
