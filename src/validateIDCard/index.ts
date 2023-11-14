/**
 * @name 验证身份证
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateIDCard = (data: string): boolean => {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/.test(
    data
  );
};

export default validateIDCard;
