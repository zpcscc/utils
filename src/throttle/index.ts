/**
 * @name throttle
 * @description 节流函数
 * @param {function} func 需要节流的函数
 * @param {number} limit 节流等待的时间
 * @returns {function} 返回节流后的函数
 * @example <caption>ts类型</caption>
throttle(func: AnyFunction, limit: number): AnyFunction
 * @example <caption>demo</caption>
import { throttle } from '@zpcscc/utils';

const test = () => {
  console.log('执行一次');
}

const throttleTest = throttle(test,300);

// 300ms后
throttleTest(); // 执行一次；
throttleTest();
// 300ms后
throttleTest(); // 执行一次；
throttleTest();
// 300ms后
throttleTest(); // 执行一次；
 */
const throttle = (func: AnyFunction, limit: number): AnyFunction => {
  let inThrottle: boolean;
  return function (...args) {
    if (!inThrottle) {
      // @ts-expect-error
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default throttle;
