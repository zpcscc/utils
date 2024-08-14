import { emailStrictRegExp } from 'src/regular';
import toString from 'src/toString';

/**
 * @name 验证邮箱
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateEmail = (data: string): boolean => {
  return emailStrictRegExp.test(toString(data));
};

export default validateEmail;
