import getType from 'src/getType';
import isEmpty from 'src/isEmpty';

/**
 * @name pick
 * @description 从一个对象中，提取出指定字段组成一个新对象并返回
 * @param {object} obj 待提取的对象
 * @param {array} keysToPick 需要提取的字段名称数组
 * @returns {object} 提取后的对象
 * @example <caption>ts类型</caption>
pick(obj:AnyObject, keysToPick:AnyArray, deep?:boolean)
 * @example <caption>demo</caption>
import { pick } from '@zpcscc/utils';

// 示例
const original = { a: 1, b: { c: 3, d: 4 }, e: 5 };

// 浅层提取
const shallowResult = pick(original, ['a', 'b']);
console.log(shallowResult); // 输出 { a: 1, b: { c: 3, d: 4 } }

// 深层提取
const deepResult = pick(original, ['b'], true);
console.log(deepResult); // 输出 { b: { c: 3, d: 4 } }
 */
const pick = (obj: AnyObject, keysToPick: AnyArray, deep: boolean = false): AnyObject => {
  if (getType(obj) !== 'Object' || isEmpty(obj)) return {};

  // 创建一个空对象来存放结果
  const result = {};

  // 遍历 keysToPick，检查每个 key 是否存在于对象中
  keysToPick.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  // 如果 deep 为 true，则对子对象进行递归处理
  if (deep) {
    Object.keys(result).forEach((key) => {
      if (getType(result[key]) === 'Object') {
        result[key] = pick(result[key], Object.keys(result[key]), true);
      }
    });
  }

  return result;
};

export default pick;
