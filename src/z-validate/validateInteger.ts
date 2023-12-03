import toString from 'src/toString';

/**
 * @name 验证整数
 * @param {number} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateInteger = (data: number): boolean => {
  return /(^-?[1-9](\d*)$|^-?\d$)/.test(toString(data));
};

export default validateInteger;
