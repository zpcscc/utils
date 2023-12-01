import toString from 'src/toString';
import desensitizeName from './desensitizeName';

export type DesensitizeType = 'name' | 'phone' | 'IdCard' | 'telephone' | 'backCard';

/**
 * @name 将指定字符串复制指定次数并拼接在一起
 * @param {string} str 待复制的字符串
 * @param {number} num 复制的次数
 * @returns {string} 复制拼接后的字符串
 */
const copyStrByNum = (str: string, num: number = 1): string => {
  return new Array(num).fill(toString(str)).join('');
};

/**
 * @name 对数据进行脱敏处理
 * @param {string} value
 * @param {DesensitizeType} type
 * @returns {string}
 */
const desensitize = (value?: string, type?: DesensitizeType): string => {
  // 将传入的值转为字符串，并去除前后空格，确保后续都是对字符串进行操作
  const strValue = toString(value).trim();
  if (!strValue) return '';
  const strLength = strValue.length;
  // 只有一个字符，原样返回
  if (strLength === 1) return strValue;
  // 两个字符，只显示第一个字符，其他用*代替
  if (strLength === 2) return `${strValue[0]}*`;

  switch (type) {
    // 姓名的脱敏处理
    case 'name': {
      return desensitizeName(strValue);
    }
  }

  // 默认脱敏规则
  // 长度  2 < str < 5， 则只显示第一位与最后一位，其他用*代替;
  if (strLength > 2 && strLength < 5) {
    return `${strValue.slice(0, 1)}${copyStrByNum('*', strLength - 2)}${strValue.slice(-1)}`;
  }
  // 其他情况，长度大于等于5的，显示前两位与后两位，中间用*代替;
  return `${strValue.slice(0, 2)}${copyStrByNum('*', strLength - 4)}${strValue.slice(-2)}`;
};

export default desensitize;
