/**
 * @name 验证手机号
 * @param {data} 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validatePhone = (data: string) => {
  return /^1(3\d|4[014-9]|5[0-35-9]|6[25-7]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(data);
};

export default validatePhone;
