import cloneDeep from 'src/cloneDeep';
import getType from 'src/getType';
import isEmpty from 'src/isEmpty';
/**
 * @name omit
 * @description 从一个对象中，排除指定字段，将剩余字段组成一个新对象并返回
 * @param {object} obj 待排除的对象
 * @param {array} keysToOmit 需要排除的字段名称数组
 * @param {boolean} deep 是否递归处理所有子对象
 * @returns {object} 排除指定字段后的对象
 * @example <caption>ts类型</caption>
omit(data:AnyObject, keysToOmit:AnyArray, deep?:boolean)
 * @example <caption>demo</caption>
import { omit } from '@zpcscc/utils';

// 示例-1
const original = { a: 1, b: 2, c: 3 };
const result = omit(original, ['b', 'c']);
console.log(result);  // 输出 { a: 1 }

// 示例-2
const original = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};
const shallowResult = omit(original, ['b', 'd']);
console.log(shallowResult);  // 输出 { a: 1, c: { d: 3, e: 4 } }
const deepResult = omit(original, ['b', 'd'], true);
console.log(deepResult);  // 输出 { a: 1, c: { e: 4 } }
 */
const omit = (obj: AnyObject, keysToOmit: AnyArray, deep: boolean = false): AnyObject => {
  if (getType(obj) !== 'Object' || isEmpty(obj)) return {};

  // 创建一个对象副本
  const result = cloneDeep(obj);

  // 遍历需要删除的 key
  keysToOmit.forEach((key) => {
    // 如果对象中有这个 key，删除它
    if (key in result) {
      delete result[key];
    }
  });

  // 如果 deep 为 true，则对子对象进行递归处理
  if (deep) {
    Object.keys(result).forEach((key) => {
      if (getType(result[key]) === 'Object') {
        result[key] = omit(result[key], keysToOmit, true);
      }
    });
  }

  return result;
};

export default omit;
