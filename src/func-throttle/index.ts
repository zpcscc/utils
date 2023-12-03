import type { AnyFunction } from 'src/types';
import debounce from '../func-debounce';
import isObject from '../isObject';

/**
 * @name 节流函数
 * @description 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 pending 方法获取函数是否在等待中。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。
 * @param {AnyFunction} func=()=>{} 传入一个需要节流的函数
 * @param {number} wait=0 节流调用限制的毫秒数;
 * @param {Object} options={} 配置选项
 * @param {boolean} options.leading=true 指定在超时的前沿调用。
 * @param {boolean} options.trailing=true 指定在超时的后沿调用。
 * @returns {AnyFunction} 返回新的节流函数
 * @example <caption>ts类型</caption>
throttle(
  func: Function,
  wait?: number,
  options?: {
    leading?: boolean,
    trailing?: boolean
  }
);
@example <caption>demo</caption>
import { throttle } from '@zpcscc/utils';

const throttleFunc = throttle(function () {
  console.log(1);
}, 100);
throttleFunc();
throttleFunc();
throttleFunc();
throttleFunc();
// 每隔100豪秒输出一次1
 */
const throttle = (
  func: AnyFunction,
  wait?: number,
  options?: { leading?: boolean; trailing?: boolean }
): AnyFunction => {
  let leading = true;
  let trailing = true;

  if (typeof func !== 'function') {
    throw new TypeError('请输入一个函数');
  }
  if (options && isObject(options)) {
    leading = 'leading' in options ? Boolean(options.leading) : leading;
    trailing = 'trailing' in options ? Boolean(options.trailing) : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait
  });
};

export default throttle;
