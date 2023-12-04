import toString from 'src/toString';

/**
 * @name 按指定长度拆分字符串
 * @param {string} value 待分割的字符串
 * @param {number} len 分割的数组每项的字符串长度
 * @returns {string[]} 分割后的数组
 * @example <caption>ts类型</caption>
splitStrByLen(value:string, len?:number)
 * @example <caption>demo</caption>
import { splitStrByLen } from '@zpcscc/utils';

console.log(splitStrByLen('张三张三张三', 2)); // ['张三','张三','张三']
console.log(splitStrByLen('123456789', 3)); // ['123','456','789']
console.log(splitStrByLen('1234567890', 4)); // ['1234','5678','90']
 */
const splitStrByLen = (value: string, len: number | undefined = 1): string[] => {
  const str = toString(value);
  const arr: string[] = [];
  const strLen = str.length;
  for (let i = 0; i < strLen; i += len) {
    arr.push(str.slice(i, i + len));
  }
  return arr;
};

export default splitStrByLen;
