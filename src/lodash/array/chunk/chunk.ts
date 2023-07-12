import { toInteger } from 'src';

/**
 * @name 拆分数组
 * @description 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
 * @param {Array} array 需要拆分的数组
 * @param {number} s 需要拆分的数组长度
 * @return {Array} 返回
 */
const chunk = (array: any[], s?: number): any[] => {
  const size = Math.max(toInteger(s || 1), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
};

export default chunk;
