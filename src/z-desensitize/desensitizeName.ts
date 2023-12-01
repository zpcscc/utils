import toString from 'src/toString';

export type DesensitizeType = 'name' | 'phone' | 'IdCard' | 'telephone' | 'backCard';

/**
 * @name 判断一个字符串中是否含有中文
 * @param {string} str 待判断的字符串
 * @returns {boolean} 返回布尔值
 */
const isIncludeChinese = (str: string): boolean => /[\u4E00-\u9FFF]+/g.test(toString(str));

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
 * @name 按指定长度拆分字符串
 * @param {string} str 待分割的字符串
 * @param {number} len 分割的数组每项的字符串长度
 * @returns {string[]} 分割后的数组
 */
const splitStrByLen = (str: string, len: number | undefined = 1): string[] => {
  const arr: string[] = [];
  const strLen = str.length;
  for (let i = 0; i <= strLen; i += len) {
    arr.push(str.slice(i, i + len));
  }
  return arr;
};

/**
 * @name 对姓名进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizeName = (strValue: string): string => {
  const strLength = strValue.length;

  // 处理包含中文的字符串
  if (isIncludeChinese(strValue)) {
    // 小于4个字符，只显示第一位，其他用*代替;
    if (strLength < 4) {
      return `${strValue.slice(0, 1)}${copyStrByNum('*', strLength - 1)}`;
    }
    // 将字符串按数量分割成数组
    const strArr = splitStrByLen(strValue, 4);
    // 将数组每项字符串，第一位显示，其他用*代替;
    const newStrArr = strArr.map(
      (item) => `${item.slice(0, 1)}${copyStrByNum('*', item.length - 1)}`
    );
    return newStrArr.join('');
  }

  // 英文字符串
  // 将字符串按空格分割成数组
  const strArr = strValue.split(' ');
  //  若没有空格，则隐藏后三分之二的字符串，用*代替;
  if (strArr.length === 1) {
    // 需要隐藏的字符串长度
    const hideLength = Math.round(strLength * (2 / 3));
    const showLength = strLength - hideLength;
    return `${strValue.slice(0, showLength)}${copyStrByNum('*', hideLength)}`;
  }
  const newStrArr = strArr.map((item, index) => {
    if (index === 0) return item;
    return copyStrByNum('*', item.length);
  });
  return newStrArr.join(' ');
};

export default desensitizeName;
