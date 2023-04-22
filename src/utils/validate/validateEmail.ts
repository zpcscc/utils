/**
 * @name 验证邮箱
 * @param {data} 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateEmail = (data: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
};

export default validateEmail;
