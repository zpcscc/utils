import copyStrByNum from 'src/str-copyStrByNum';

/**
 * @name 对手机号进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizePhone = (strValue: string): string => {
  const newStrValue = strValue.replaceAll(/[\s+-]/g, '');
  // 手机号，统一只显示前后三位，中间显示5个*号；
  return `${newStrValue.slice(0, 3)}${copyStrByNum('*', 4)}${newStrValue.slice(-4)}`;
};

export default desensitizePhone;
