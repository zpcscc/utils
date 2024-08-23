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
  onTick: (time: { days: number; hours: number; minutes: number; seconds: number; milliseconds?: number }) => void;
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

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = endTimestamp - currentTime;

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        onTick?.({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        onEnd?.();
      } else {
        const components = parseTime(remainingTime);
        onTick?.(components);
      }
    }, UPDATE_INTERVAL);
  };

  // 立即执行第一次检查，以防止刚开始时错过了0秒的状态
  const currentTime = Date.now();
  const initialRemainingTime = endTimestamp - currentTime;

  if (initialRemainingTime <= 0) {
    onTick?.({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    onEnd?.(); // 如果已经到时间，立即触发完成回调
  } else {
    const initialComponents = parseTime(initialRemainingTime);
    onTick?.(initialComponents); // 立即触发第一次 onTick
    startCountdown();
  }
};

export default countdown;
