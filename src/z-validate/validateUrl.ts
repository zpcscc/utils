import { urlStrictRegExp } from 'src/regular';
import toString from 'src/toString';

/**
 * @name 验证Url链接
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateUrl = (data: string): boolean => {
  return urlStrictRegExp.test(toString(data));
};

export default validateUrl;
