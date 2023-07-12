import { getType } from 'src';

/**
 * @name 检查“value”是否是“string”
 * @param {*} value 要判断的值.
 * @returns {boolean} 返回布尔值.
 */
const isString = (value?: any): boolean => {
  const type = typeof value;
  return (
    type === 'string' ||
    (type === 'object' && value != null && !Array.isArray(value) && getType(value) === 'String')
  );
};

export default isString;
