import toTimestamp from 'src/toTimestamp';
import type { TimesType } from 'src/types';

/**
 * @name parseTime
 * @description 格式化时间，将各类时间转为 天，时，分，秒，毫秒的形式
 * @param {any} inputTime 需要转换的时间
 * @return {object} 解析后的时间对象
 * @example <caption>ts类型</caption>
parseTime(inputTime:any)
 * @example <caption>demo</caption>
import { parseTime } from '@zpcscc/utils';

console.log(parseTime('2024-08-23 12:34:56')); // 输出: { days: 18941, hours: 12, minutes: 34, seconds: 56, milliseconds: 789 };
 */
const parseTime = (inputTime: any): TimesType => {
  const timestamp = toTimestamp(inputTime);

  // 计算时间组件
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const days = Math.floor(timestamp / millisecondsInDay);
  const remainder = timestamp % millisecondsInDay;
  const date = new Date(remainder);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
};

export default parseTime;
