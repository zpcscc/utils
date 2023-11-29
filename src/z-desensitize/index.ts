import toString from 'src/toString';

export type DesensitizeType = 'name' | 'phone' | 'IdCard';

// 获取对应数量的星号
const getAsterisk = (num: number) => {
  return new Array(num).fill('*').join('');
};

/**
 * 将字符串按指定的数量分割成数组
 * @param str 待分割的字符串
 * @param num 分割数量
 * @returns 分割后的数组
 */
const splitStringByCount = (str: string, num: number): string[] => {
  const arr: string[] = [];
  const len = str.length;
  const size = Math.ceil(len / num);
  for (let i = 0; i < len; i += size) {
    arr.push(str.slice(i, i + size));
  }
  return arr;
};

/**
 * @name 对数据进行脱敏处理
 * @param {string} value
 */
const desensitize = (value?: string, type?: DesensitizeType): string => {
  const strValue = toString(value);
  if (!strValue) return '';
  const strLength = strValue.length;
  // 两个字符，只显示第一个字符，其他用星号代替
  if (strLength === 2) return `${strValue[0]}*`;

  // 对姓名字符的处理
  if (type === 'name') {
    console.log(value);
    // 名称，小于4个字符，只显示第一位，其他用星号代替;
    if (strLength < 4) {
      return `${strValue.slice(0, 1)}${getAsterisk(strLength - 1)}`;
    } else if (strLength >= 4) {
      // 将字符串按数量分割成数组
      const strArr = splitStringByCount(strValue, 4);
      console.log('strArr:', strArr);
      return `${strValue.slice(0, 1)}${getAsterisk(strLength - 3)}${strValue.slice(-1)}`;
    }
  }

  // 默认脱敏规则
  // 长度  2 < str < 5， 则只显示第一位与最后一位，其他用星号代替;
  if (strLength > 2 && strLength < 5) {
    return `${strValue.slice(0, 1)}${getAsterisk(strLength - 2)}${strValue.slice(-1)}`;
  }
  // 长度大于5的，显示前两位与后两位，中间用星号代替;
  if (strLength >= 5) {
    return `${strValue.slice(0, 2)}${getAsterisk(strLength - 4)}${strValue.slice(-2)}`;
  }
  // 其他情况（也就是字符串长度为1的情况）不进行脱敏处理，直接返回
  return strValue;
};

export default desensitize;
