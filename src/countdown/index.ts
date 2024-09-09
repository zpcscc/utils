import parseTime from 'src/parseTime';
import type { TimesType } from 'src/types';

export type CountdownProps = {
  // 倒计时的结束时间，支持时间戳或时间格式的字符串
  endTime: string;
  // 倒计时间隔时间
  interval?: number;
  // 倒计时每次变化的回调
  onTick?: (times: TimesType) => void;
  // 倒计时完成回调
  onEnd?: () => void;
};

/**
 * @name countdown
 * @description 一个倒计时函数
 * @param {string} endTime 结束时间
 * @param {number} interval 倒计时间隔时间，默认 1000（1秒）
 * @param {function} onTick 每一步倒计时的回调
 * @param {function} onEnd 倒计时结束时的回调
 * @example <caption>ts类型</caption>
countdown({
  endTime: string;
  interval: number;
  onTick: (time: { days: number; hours: number; minutes: number; seconds: number; }) => void;
  onEnd: () => void;
})
 * @example <caption>demo</caption>
import { countdown } from '@zpcscc/utils';

countdown({
  endTime: "2024-08-23T12:00:00", // 目标时间
  onTick: ({ days, hours, minutes, seconds }) => {
    console.log(`倒计时更新: ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`);
  },
  onEnd: () => console.log('倒计时结束！'), // 完成时的回调
});
 */
const countdown = ({ endTime, onTick, onEnd, interval }: CountdownProps) => {
  const endTimestamp = new Date(endTime).getTime();
  const UPDATE_INTERVAL = interval || 1000;
  let remainingTime = endTimestamp;
  let timer: NodeJS.Timeout;

  const update = () => {
    const currentTime = Date.now();
    // 计算剩余时间
    remainingTime = endTimestamp - currentTime;
    if (remainingTime <= 0) {
      remainingTime = 0;
      onTick?.(parseTime(remainingTime));
      onEnd?.();
      clearTimeout(timer);
      return;
    }
    onTick?.(parseTime(remainingTime));
    // 计算下一次执行时间
    const nextTick = Math.max(UPDATE_INTERVAL - (Date.now() - currentTime), 0);
    // 每次依据当前时间，重新开始计时；避免长时间计时导致的累计误差；
    timer = setTimeout(update, nextTick);
  };

  update();
};

export default countdown;
