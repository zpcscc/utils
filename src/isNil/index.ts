/**
 * @name 检查“value”是否是“null”或“undefined”
 * @param {*} value 要判断的值.
 * @returns {boolean} 返回布尔值.
 */
const isNil = (value?: any): boolean => value == null;

export default isNil;
