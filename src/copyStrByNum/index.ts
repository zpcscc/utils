import toString from 'src/toString';

/**
 * @name copyStrByNum-复制字符串
 * @description 将指定字符串复制指定次数并使用传入的拼接符号拼接在一起
 * @param {string} str 待复制的字符串
 * @param {number} num=1 复制的次数
 * @param {number} interval 用于拼接字符串的符号
 * @returns {string} 复制拼接后的字符串
 * @example <caption>ts类型</caption>
copyStrByNum(data:string, num?:number,interval?:string)
 * @example <caption>demo</caption>
import { copyStrByNum } from '@zpcscc/utils';

console.log(copyStrByNum('*', 5)); // *****
console.log(copyStrByNum('张三', 3)); // 张三张三张三
console.log(copyStrByNum('李四', 4, '-')); // 李四-李四-李四-李四
console.log(copyStrByNum('Name')); // Name
 */
const copyStrByNum = (str: string, num: number = 1, interval: string = ''): string => {
  return new Array(num).fill(toString(str)).join(toString(interval));
};

export default copyStrByNum;
