/**
 * @name 将“value”转换为有限数字
 * @param {*} v 要转换的值.
 * @returns {number} 返回转换后的数字.
 */
const toNumber = (v: any): number => {
  let value = v;
  if (!value) return 0;
  try {
    value = Number(value);
    if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
      const sign = value < 0 ? -1 : 1;
      return sign * Number.MAX_VALUE;
    }
  } catch {
    return 0;
  }
  return Number.isNaN(value) ? 0 : value;
};

export default toNumber;
