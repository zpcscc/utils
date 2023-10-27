/**
 * @name 将string转为json等数据
 * @param {string} str 需要转换的字符串
 * @param parseArgs 其他参数，用于传入parse
 * @returns {array|object|string} 返回对应格式的数据
 */
// 字符串类型的数据转成真正对应格式的数据
const toData = (str: any, ...parseArgs: any): any => {
  if (typeof str !== 'string') return str;
  try {
    if (typeof JSON.parse(str) === 'object') {
      return JSON.parse(str, ...parseArgs);
    }
    return str;
  } catch {
    return str;
  }
};

export default toData;
