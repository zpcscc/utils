import getType from 'src/getType';

/**
 * @name 检查“value”是否是“object”
 * @param {*} value 要判断的值.
 * @returns {boolean} 返回布尔值.
 */
const isObject = (value?: any): boolean => {
  const type = typeof value;
  return value != null && type === 'object' && getType(value) === 'Object';
};

export default isObject;
