// 用于临时保存全局变量，确保所有id唯一
const idCounter = {};

/**
 * @name 生成全局唯一ID
 * @param {string} prefix=$zpcscc$ 指定id的前缀
 * @returns {string} 返回一个唯一ID
 * @example <caption>ts类型</caption>
getUniqueId(prefix?:string);
 * @example <caption>demo</caption>
import { getUniqueId } from '@zpcscc/utils';

console.log(getUniqueId()); //  1;
console.log(getUniqueId()); //  2;
console.log(getUniqueId()); //  3;
console.log(getUniqueId()); //  4;
console.log(getUniqueId()); //  5;
console.log(getUniqueId('test_')); //  test_1;
console.log(getUniqueId('test_')); //  test_2;
console.log(getUniqueId('test_')); //  test_3;
console.log(getUniqueId('test_')); //  test_4;
console.log(getUniqueId('test_')); //  test_5;
 */
const getUniqueId = (prefix: string = '$zpcscc$'): string => {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }
  const id = ++idCounter[prefix];
  if (prefix === '$zpcscc$') {
    return `${id}`;
  }
  return `${prefix}${id}`;
};

export default getUniqueId;
