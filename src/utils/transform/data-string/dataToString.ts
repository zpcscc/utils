import { isString, toString } from 'lodash';

/**
 * @name 将各种格式的数据转为string
 * @param {AnyObject} data 需要转换的数据
 * @param stringifyArgs 其他参数，用于传入stringify
 * @returns {string} 转换后的字符串数据
 */
const dataToString = (data: any, ...stringifyArgs: any[]): string => {
  if (isString(data)) return data;
  let str = '';
  str = Array.isArray(data) ? JSON.stringify(data, ...stringifyArgs) : toString(data);
  if (str === '[object Object]') str = JSON.stringify(data, ...stringifyArgs);
  return str;
};

export default dataToString;
