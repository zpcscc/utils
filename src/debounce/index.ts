/**
 * @name debounce
 * @description 防抖函数
 * @param {function} func 需要防抖的函数
 * @param {number} wait 防抖等待的时间
 * @returns {function} 返回防抖后的函数
 * @example <caption>ts类型</caption>
debounce(func: AnyFunction, wait: number): AnyFunction
 * @example <caption>demo</caption>
import { debounce } from '@zpcscc/utils';

const test = () => {
  console.log('执行一次');
}

const debounceTest = debounce(test,300);

debounceTest();
debounceTest();
debounceTest(); // 执行一次；
 */
const debounce = (func: AnyFunction, wait: number): AnyFunction => {
  let timeout: NodeJS.Timeout;
  return function (...args) {
    clearTimeout(timeout);
    // @ts-expect-error
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export default debounce;
