import isIncludeChinese from 'src/isIncludeChinese';
import copyStrByNum from 'src/str-copyStrByNum';
import splitStrByLen from 'src/str-splitStrByLen';

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
  const strArr = strValue.split(/\s+/);
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
