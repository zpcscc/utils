import { isString, toString } from 'lodash';

/**
 * @name 将各种格式的数据转为string
 * @param data 需要转换的数据
 * @param stringifyArgs 其他参数，用于传入stringify
 * @returns
 */
const dataToString = (data: any, ...stringifyArgs: any[]): string => {
  if (isString(data)) return data;
  let str = '';
  if (Array.isArray(data)) {
    str = JSON.stringify(data, ...stringifyArgs);
  } else {
    str = toString(data);
  }
  if (str === '[object Object]') str = JSON.stringify(data, ...stringifyArgs);
  return str;
};

export default dataToString;
