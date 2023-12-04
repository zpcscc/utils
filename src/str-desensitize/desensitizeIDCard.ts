import copyStrByNum from 'src/str-copyStrByNum';
import desensitizeDefault from './desensitizeDefault';

/**
 * @name 对身份证进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizeIDCard = (strValue: string): string => {
  const strLength = strValue.length;
  if (strLength === 15) {
    // 15位身份证号，显示前6位，与倒数第二，第三位。其他显示为*号；
    return `${strValue.slice(0, 6)}${copyStrByNum('*', 6)}${strValue.slice(12, 14)}*`;
  } else if (strLength === 18) {
    // 18位身份证号，显示前6位，与倒数第三，第四位，其他显示为*号；
    return `${strValue.slice(0, 6)}${copyStrByNum('*', 8)}${strValue.slice(14, 16)}**`;
  }
  return desensitizeDefault(strValue);
};

export default desensitizeIDCard;
