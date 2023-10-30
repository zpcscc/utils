import getType from 'src/getType';
import isNumber from 'src/isNumber';

const MAX_SAFE_INTEGER = 9007199254740991;

const isLength = (value: any): boolean => {
  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
};

const isArrayLike = (value: any): boolean => {
  return value != null && typeof value !== 'function' && isLength(value.length);
};

/**
 * @name 判断数据是否为空
 * @param {*} value 需要检查的数据
 * @returns {boolean} 返回布尔值
 */
const isEmpty = (value?: any): boolean => {
  if (value === null || value === undefined) return true;
  if (isNumber(value)) return false;
  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value === 'string' ||
      typeof value.splice === 'function' ||
      getType(value) === 'Arguments')
  ) {
    return value.length === 0;
  }
  const tag = getType(value);
  if (tag === 'Map' || tag === 'Set') {
    return value.size === 0;
  }
  for (const key in value) {
    /* istanbul ignore next */
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
};

export default isEmpty;
