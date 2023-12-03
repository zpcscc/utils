import toString from 'src/toString';
import desensitizeDefault from './desensitizeDefault';
import desensitizeIDCard from './desensitizeIDCard';
import desensitizeName from './desensitizeName';

export type DesensitizeType = 'name' | 'phone' | 'IDCard' | 'telephone' | 'backCard';

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
    case 'IDCard': {
      return desensitizeIDCard(strValue);
    }
    default: {
      return desensitizeDefault(strValue);
    }
  }
};

export default desensitize;
