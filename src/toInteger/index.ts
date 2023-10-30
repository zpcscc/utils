import toNumber from 'src/toNumber';

/**
 * @name 将“value”转为整数
 * @param {*} value 要转换的值.
 * @returns {number} 返回转换后的整数.
 */
const toInteger = (value: any): number => {
  const result = toNumber(value);
  const remainder = result % 1;
  return remainder ? result - remainder : result;
};

export default toInteger;
