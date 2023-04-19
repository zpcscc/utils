/**
 * @name 验证手机号
 */
const validatePhone = (data: string) => {
  return /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(data);
};

export default validatePhone;
