/**
 * @name 对银行卡号进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizeBankCard = (strValue: string): string => {
  const strLength = strValue.length;
  const strArr = [...strValue];
  // 去除空格和-的，纯数字的长度；
  const numLength = strValue.replaceAll(/[ -]/g, '').length;
  return strArr
    .map((item, index) => {
      // 空格与-统一显示为空格
      if (item === ' ' || item === '-') return ' ';
      const shieldNum = numLength < 16 ? 1 : 3;
      if (index <= shieldNum || index >= strLength - shieldNum - 1) {
        // 前几位与后几位正常显示
        return item;
      }
      // 其他字段全部屏蔽
      return '*';
    })
    .join('');
};

export default desensitizeBankCard;
