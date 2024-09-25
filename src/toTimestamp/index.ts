/**
 * @name toTimestamp
 * @description 任意时间值转为时间戳
 * @param {string} inputTime 需要转换的时间
 * @return {number} 返回对应的时间戳
 * @example <caption>ts类型</caption>
toTimestamp(time:any)
 * @example <caption>demo</caption>
import { toTimestamp } from '@zpcscc/utils';

console.log(toTimestamp('2024-08-23T12:34:56.789Z')); // 输出指定时间的时间戳
console.log(toTimestamp(new Date())); // 输出当前时间的时间戳
console.log(toTimestamp(1692791696789)); // 输出指定时间戳
console.log(toTimestamp('invalid date')); // 输出当前时间的时间戳
 */
const toTimestamp = (inputTime: any): number => {
  try {
    let timestamp: number;
    if (typeof inputTime === 'string') {
      // 尝试解析字符串时间
      timestamp = Date.parse(inputTime);
    } else if (inputTime instanceof Date) {
      // 使用 Date 对象的时间戳
      timestamp = inputTime.getTime();
    } else if (typeof inputTime === 'number') {
      // 如果是时间戳，直接使用
      timestamp = inputTime;
    } else {
      // 不支持的输入类型
      return Date.now();
    }

    // 如果解析失败，返回当前时间戳
    if (Number.isNaN(timestamp)) {
      return Date.now();
    }

    return timestamp;
  } catch {
    // 捕获异常，返回当前时间戳
    return Date.now();
  }
};

export default toTimestamp;
