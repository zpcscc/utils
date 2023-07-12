import { toFinite } from 'src/lodash';

/**
 * @name 将“value”转为整数
 * @param {*} value 要转换的值.
 * @returns {number} 返回转换后的整数.
 */
const toInteger = (value: any): number => {
  const result = toFinite(value);
  const remainder = result % 1;
  return remainder ? result - remainder : result;
};

export default toInteger;
