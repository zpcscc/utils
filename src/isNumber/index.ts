import getType from 'src/getType';

/**
 * @name 检查“value”是否是“Symbol“
 * @param {*} value 要判断的值.
 * @returns {boolean} 返回布尔值.
 */
const isNumber = (value?: any): boolean => {
  // 排除 Infinity、-Infinity、NaN
  if (
    Number.isNaN(value) ||
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY
  ) {
    return false;
  }
  const type = typeof value;
  return type === 'number' || (type === 'object' && value != null && getType(value) === 'Number');
};

export default isNumber;
