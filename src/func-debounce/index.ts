/* eslint-disable no-implicit-coercion */
/* eslint-disable no-param-reassign */
import isObject from 'src/isObject';
import type { AnyFunction } from '../types';

/**
 * @name 创建一个防抖函数
 * @param {AnyFunction} func 需要进行防抖的函数
 * @param {number} [wait=0] 要延迟的毫秒数；如果省略，“requestAnimationFrame”为已使用（如果可用）。
 * @param {Object} [options={}] 选项对象。
 * @param {boolean} [options.leading=false] 指定在超时的前沿调用。
 * @param {number} [options.maxWait] 允许在调用“func”之前延迟最长时间。
 * @param {boolean} [options.trailing=true] 指定在超时的后沿调用。
 * @returns {Function} 返回新的防抖函数.
 */
const debounce = (
  func: AnyFunction,
  wait?: number,
  options?: { leading?: boolean; maxWait?: number; trailing?: boolean }
): AnyFunction & { cancel: AnyFunction; pending: AnyFunction } => {
  let lastArgs: any[] | undefined;
  let lastThis: undefined;
  let maxWait: number = 0;
  let result: any;
  let timerId: any;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;

  if (!wait) wait = 0;
  if (typeof func !== 'function') {
    throw new TypeError('请输入一个函数');
  }

  wait = +wait || 0;
  if (options && isObject(options)) {
    leading = Boolean(options?.leading);
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+(options?.maxWait as number), wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  const invokeFunc = (time: number) => {
    const args = lastArgs as any[];
    const thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  };

  const startTimer = (
    pendingFunc: { (): any; (): any; (): any; (): any; (): void },
    milliseconds: number | undefined
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return setTimeout(pendingFunc, milliseconds);
  };

  const cancelTimer = (id: string | number | undefined) => {
    clearTimeout(id);
  };

  const leadingEdge = (time: number) => {
    // 重置“maxWait”计时器.
    lastInvokeTime = time;
    // 启动后缘计时器.
    timerId = startTimer(timerExpired, wait);
    // 调用函数.
    return leading ? invokeFunc(time) : result;
  };

  const remainingWait = (time: number) => {
    const timeSinceLastCall = time - (lastCallTime as number);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = (wait as number) - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  };

  const shouldInvoke = (time: number) => {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;
    // 要么这是第一次调用，活动已经停止，我们处于后缘，要么系统时间倒退，我们将其视为后缘，要么我们已经达到“maxWait”限制。
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= (wait || 0) ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    );
  };

  const timerExpired = () => {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // 重新启动计时器.
    timerId = startTimer(timerExpired, remainingWait(time));
  };

  const trailingEdge = (time: number) => {
    timerId = undefined;
    // 只有当我们有“lastArgs”时才调用，这意味着“func”至少被取消了一次。
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  };

  const cancel = () => {
    if (timerId !== undefined) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  };

  const pending = () => {
    return timerId !== undefined;
  };

  // eslint-disable-next-line func-style
  function debounced(this: any, ...args: any[]) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    // eslint-disable-next-line unicorn/no-this-assignment, @typescript-eslint/no-this-alias
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // 在一个紧密的循环中处理调用。
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.pending = pending;
  return debounced;
};

export default debounce;