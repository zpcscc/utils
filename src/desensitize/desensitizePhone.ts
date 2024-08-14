import copyStrByNum from 'src/copyStrByNum';
import pickNumber from 'src/pickNumber';

/**
 * @name 对手机号进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizePhone = (strValue: string): string => {
  const newStrValue = pickNumber(strValue, 'integerPlus').join('');
  // 手机号，统一只显示前后三位，中间显示5个*号；
  return `${newStrValue.slice(0, 3)}${copyStrByNum('*', 4)}${newStrValue.slice(-4)}`;
};

export default desensitizePhone;
