/* eslint-disable func-style */

/**
 * @name walkSplit
 * @description 这是一个逐步拆分字符串的生成器。可以生成一个迭代器。每次调用 next，会返回当前步骤拆分的字符串内容
 * @param {string} str 需要拆分的字符串数据
 * @param {string[]} terminals 拆分的终止符数组
 * @return {iterator} 返回一个迭代器。可使用.next()，获取下一步的数据
 * @example <caption>ts类型</caption>
walkSplit(data:string,terminals:string[]);
 * @example <caption>demo</caption>
import { walkSplit } from '@zpcscc/utils';

// 生成一个拆分版本号的迭代器
const iterator = walkSplit('1.2.3-alpha.5', ['.', '-']);
// 每次调用next,可以获取下一步拆分出来的数据。
console.log(iterator.next()); // { done: false, value: '1' }
console.log(iterator.next()); // { done: false, value: '2' }
console.log(iterator.next()); // { done: false, value: '3' }
console.log(iterator.next()); // { done: false, value: 'alpha' }
console.log(iterator.next()); // { done: false, value: '5' }
console.log(iterator.next()); // { done: true, value: undefined }

// 也可以使用 for of 遍历迭代器获取 value
for (const item of iterator) {
  console.log(item); // 依次打印 1 2 3 alpha 5
}
 */
function* walkSplit(str: string, terminals: string[]): Generator<string, any, string> {
  // 迭代器，拆分版本号;
  let part = '';
  for (const element of str) {
    if (terminals.includes(element)) {
      // 终结符
      yield part;
      part = '';
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      part += element;
    }
  }
  yield part;
}

export default walkSplit;
