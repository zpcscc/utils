/**
 * @name 验证日期
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateDate = (data: string): boolean => {
  return !Number.isNaN(new Date(data).valueOf());
};

export default validateDate;
