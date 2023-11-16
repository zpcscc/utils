import type { AnyFunction } from 'src/types';
import debounce from '../func-debounce';
import isObject from '../isObject';

/**
 * @name 创建一个节流函数
 * @param {AnyFunction} func 传入一个需要节流的函数
 * @param {number} [wait=0] 要限制对的调用的毫秒数；如果省略，则使用“requestAnimationFrame”（如果可用）.
 * @param {Object} [options={}] 配置选项
 * @param {boolean} [options.leading=true] 指定在超时的前沿调用。
 * @param {boolean} [options.trailing=true] 指定在超时的后沿调用。
 * @returns {AnyFunction} 返回新的节流函数.
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
