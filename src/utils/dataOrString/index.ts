import { isString, toString } from 'lodash';

/**
 * @name 将各种格式的数据转为string
 * @param data 需要转换的数据
 * @param stringifyArgs 其他参数，用于传入stringify
 * @returns
 */
export const dataToString = (data: any, ...stringifyArgs: any[]): string => {
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

/**
 * @name 将string转为json
 * @param str 需要转换的字符串
 * @param parseArgs 其他参数，用于传入parse
 * @returns
 */
// 字符串类型的类json数据转成真正的json数据
export const stringToData = (str: any, ...parseArgs: any) => {
  if (!isString(str)) return str;
  try {
    if (typeof JSON.parse(str) === 'object') {
      return JSON.parse(str, ...parseArgs);
    }
    return str;
  } catch {
    return str;
  }
};
