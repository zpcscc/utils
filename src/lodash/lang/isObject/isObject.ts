/**
 * @name 检查“value”是否是“object”
 * @param {*} value 要判断的值.
 * @returns {boolean} 返回布尔值.
 */
const isObject = (value?: any): boolean => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

export default isObject;
