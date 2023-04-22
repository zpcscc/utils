/**
 * @name 验证身份证
 * @param {data} 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateIDCard = (data: string) => {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    data,
  );
};

export default validateIDCard;
