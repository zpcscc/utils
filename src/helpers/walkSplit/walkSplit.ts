/* eslint-disable func-style */

/**
 * @name 逐步拆分，生成器；
 * @param {string} str 需要拆分的字符串数据
 * @param {string[]} terminals 拆分的终止符数组
 */
function* walkSplit(str: string, terminals: string[]): Generator<string, any, string> {
  // 迭代器，拆分版本号;
  let part = '';
  for (let i = 0; i < str.length; i++) {
    if (terminals.includes(str[i])) {
      // 终结符
      yield part;
      part = '';
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      part += str[i];
    }
  }
  yield part;
}

export default walkSplit;
