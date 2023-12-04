/**
 * @name 获取日期距今的天数或倒计时的天数
 * @param {Date | string} value 需要计算的日期，不传的话，默认是当前日期,返回0天
 * @returns {number} 天数
 * @example <caption>ts类型</caption>
getDayOfDate(value: Date | string);
 * @example <caption>demo</caption>
import { getDayOfDate } from '@zpcscc/utils';

const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3);
console.log(getDayOfDate(pastDate)); //  3;
console.log(getDayOfDate('2023-01-01')); //  返回对应日期距今的天数;
console.log(getDayOfDate('2099-12-31')); //  返回对应日期倒计时的天数;
 */
const getDayOfDate = (value?: Date | string): number => {
  let result = 0;
  if (!value) return result;
  // 若没有传值，则使用当前日期
  let date = value;
  // 若值为字符串，则将日期字符串，转为日期格式的数据
  if (typeof date === 'string') {
    date = new Date(date);
  }
  // @ts-expect-error 日期计算
  result = Math.floor(Math.abs(new Date(Date.now() - date)) / 1000 / 60 / 60 / 24);
  // @ts-expect-error 日期计算
  if (date - Date.now() > 0) {
    result += 1;
  }
  if (Number.isNaN(result)) return 0;
  return result;
};

export default getDayOfDate;
