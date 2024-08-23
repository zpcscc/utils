import toString from 'src/toString';

/**
 * @name isIncludeChinese
 * @description 判断一个字符串中是否含有中文
 * @param {string} str 待判断的字符串
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isIncludeChinese(str:string)
 * @example <caption>demo</caption>
import { isIncludeChinese } from '@zpcscc/utils';

console.log(isIncludeChinese('张三')); // true
console.log(isIncludeChinese('张三12')); // true
console.log(isIncludeChinese('12234')); // false
console.log(isIncludeChinese('Name')); // false
 */
const isIncludeChinese = (str: string): boolean => /[\u4E00-\u9FFF]+/g.test(toString(str));

export default isIncludeChinese;
