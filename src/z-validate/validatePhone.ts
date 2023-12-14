import { phoneNumberStrictRegExp } from 'src/regular';
import toString from 'src/toString';

/**
 * @name 验证手机号
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validatePhone = (data: string): boolean => {
  return phoneNumberStrictRegExp.test(toString(data));
};

export default validatePhone;
