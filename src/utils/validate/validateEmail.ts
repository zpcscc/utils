/**
 * @name 验证邮箱
 */
const validateEmail = (data: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
};

export default validateEmail;
