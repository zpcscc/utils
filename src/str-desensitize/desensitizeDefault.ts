import copyStrByNum from 'src/str-copyStrByNum';

/**
 * @name 默认脱敏规则
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizeDefault = (strValue: string): string => {
  const strLength = strValue.length;
  // 长度  2 < str < 5， 则只显示第一位与最后一位，其他用*代替;
  if (strLength > 2 && strLength < 5) {
    return `${strValue.slice(0, 1)}${copyStrByNum('*', strLength - 2)}${strValue.slice(-1)}`;
  }
  // 其他情况，长度大于等于5的，显示前两位与后两位，中间用*代替;
  return `${strValue.slice(0, 2)}${copyStrByNum('*', strLength - 4)}${strValue.slice(-2)}`;
};

export default desensitizeDefault;
