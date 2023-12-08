import getType from 'src/getType';

// 生成4个随机字符串
const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .slice(1);
};

/**
 * @name 生成全局唯一ID
 * @param {number} length=4 随机id的长度，不包含自定义前缀
 * @param {string} prefix='' 指定id的前缀
 * @returns {string} 返回一个唯一ID
 * @example <caption>ts类型</caption>
getUniqueId(prefix?:string);
 * @example <caption>demo</caption>
import { getUniqueId } from '@zpcscc/utils';

console.log(getUniqueId()); //  '32f4';
console.log(getUniqueId(2)); //  'b0';
console.log(getUniqueId(6)); //  '3e964a';
console.log(getUniqueId(2,'test_')); //  'test_db';
console.log(getUniqueId(5,'test_')); //  'test_7ad22';
 */
const getUniqueId = (length?: number, prefix: string = ''): string => {
  let len = length || 4;
  if (!(getType(length) === 'Number')) len = 4;
  let count = Math.ceil(len / 4);
  if (!length) return s4();
  let id = '';
  while (count--) {
    id = id + s4();
  }
  return `${prefix}${id.slice(0, len)}`;
};

export default getUniqueId;
