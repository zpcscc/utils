/**
 * @name 十进制转十六进制
 * @param {number} number 十进制的数字
 * @returns {string} 返回转换后的十六进制数据
 * @example <caption>ts类型</caption>
toHex(value: number);
 * @example <caption>demo</caption>
import { toHex } from '@zpcscc/utils';

console.log(toHex(123)); // 7b
 */
const toHex = (number: number): string => `${number > 15 ? '' : 0}${number.toString(16)}`;

export default toHex;
