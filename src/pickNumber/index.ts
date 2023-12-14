import {
  decimalMinusRegExp,
  decimalPlusRegExp,
  decimalRegExp,
  digitRegExp,
  integerMinusRegExp,
  integerPlusRegExp,
  integerRegExp
} from 'src/regular';
import toNumber from 'src/toNumber';
import toString from 'src/toString';

export type NumberType =
  | 'all' // 所有数字类型
  | 'integer' // 所有整数
  | 'integerPlus' // 正整数
  | 'integerMinus' // 负整数
  | 'decimal' // 所有小数
  | 'decimalPlus' // 正小数
  | 'decimalMinus'; // 负小数

const numberTypeRegMap = new Map([
  ['all', digitRegExp],
  ['integer', integerRegExp],
  ['integerPlus', integerPlusRegExp],
  ['integerMinus', integerMinusRegExp],
  ['decimal', decimalRegExp],
  ['decimalPlus', decimalPlusRegExp],
  ['decimalMinus', decimalMinusRegExp]
]);

/**
 * @name 挑选出字符串中的所有数字，返回数字数组
 * @param {string} value 需要处理的字符串
 * @param {NumberType} type 需要挑选的数字类型
 * @return {number[]} 返回数字数组
 * @example <caption>ts类型</caption>
export type NumberType =
  | 'all' // 所有数字类型
  | 'integer' // 所有整数
  | 'integerPlus' // 正整数
  | 'integerMinus' // 负整数
  | 'decimal' // 所有小数
  | 'decimalPlus' // 正小数
  | 'decimalMinus'; // 负小数
pickNumber(value: string,type?: NumberType);
 * @example <caption>demo</caption>
import { pickNumber } from '@zpcscc/utils';

console.log(pickNumber('123-234 32.23 -23.43')); // [123, -234];
console.log(pickNumber('123-234', 'integer')); // [123, -234];
console.log(pickNumber('123-234', 'integerPlus')); // [123, 234]
console.log(pickNumber('123-234', 'integerMinus')); // [-234]
console.log(pickNumber('123-2.34', 'decimal')); // [-2.34]
console.log(pickNumber('12.4-sdf=23.4-23.8', 'decimalPlus')); // [12.4, 23.4, 23.8]
console.log(pickNumber('12.4-234-33.4', 'decimalMinus')); // [-33.4]
console.log(pickNumber('sdjlfajsghasd')); // []
 */
const pickNumber = (value: string, type: NumberType = 'all'): number[] => {
  const strValue = toString(value);
  let numArr: number[] = [];
  const mapReg = numberTypeRegMap.get(type) || digitRegExp;
  const regExp = new RegExp(mapReg, 'g');
  numArr = (strValue.match(regExp) || []).map(toNumber);
  return numArr;
};

export default pickNumber;
