/**
 * @name 验证整数
 * @param {number} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateInteger = (data: string): boolean => {
  return /(^-?[1-9](\d*)$|^-?\d$)/.test(data);
};

export default validateInteger;
