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
    return `${strValue.slice(0, 6)}${copyStrByNum('*', 6)}${strValue.slice(12, 14)}*`;
  } else if (strLength === 18) {
    return `${strValue.slice(0, 6)}${copyStrByNum('*', 8)}${strValue.slice(14, 16)}**`;
  }
  return desensitizeDefault(strValue);
};

export default desensitizeIDCard;
