/**
 * @name 十进制转十六进制
 * @param {number} n 十进制的值
 * @returns {string} 十六进制的字符串
 */
const toHex = (n: number): string => `${n > 15 ? '' : 0}${n.toString(16)}`;

export default toHex;
