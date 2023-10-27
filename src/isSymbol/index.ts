import getType from 'src/getType';

/**
 * @name 检查“value”是否是“Symbol“
 * @param {*} value 要判断的值.
 * @returns {boolean} 返回布尔值.
 */
const isSymbol = (value?: any): boolean => {
  const type = typeof value;
  return type === 'symbol' || (type === 'object' && value != null && getType(value) === 'Symbol');
};

export default isSymbol;
