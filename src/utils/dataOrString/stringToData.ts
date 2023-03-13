import { isString } from 'lodash';

/**
 * @name 将string转为json
 * @param str 需要转换的字符串
 * @param parseArgs 其他参数，用于传入parse
 * @returns
 */
// 字符串类型的类json数据转成真正的json数据
const stringToData = (str: any, ...parseArgs: any) => {
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

export default stringToData;
