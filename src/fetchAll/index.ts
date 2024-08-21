import getType from 'src/getType';
import Semaphore from './semaphore';

/**
 * @name fetchAll-并发请求接口
 * @description 传入所有需要请求的接口数据，通过此函数进行并发控制；此函数只做并发控制，请求函数与参数，由外部传入；
 * @param {any[]} tasks 待请求的接口相关任务列表
 * @param {number} maxConcurrency=5 最大并发数
 * @param {function} requestFn 自定义的请求函数
 * @returns {any[]} 请求完成后的数据数组
 * @example <caption>ts类型</caption>
fetchAll(tasks: AnyArray, maxConcurrency: number, requestFn: AnyFunction);
 * @example <caption>demo</caption>
import { fetchAll } from '@zpcscc/utils';

// 自定义的任务列表；任意数组类型；
const tasks = [
  { url: 'https://example.com/1' },
  { url: 'https://example.com/2' },
  { url: 'https://example.com/3' },
  { url: 'https://example.com/4' },
  { url: 'https://example.com/5' },
  { url: 'https://example.com/6' },
  { url: 'https://example.com/7' },
  { url: 'https://example.com/8' },
  { url: 'https://example.com/9' },
  { url: 'https://example.com/0' },
];
// 自定义的请求函数
const requestFn = (taskItem) => fetch(taskItem.url).then(response => response.text());
// 并发请求对应的数据
const results = await fetchAll(tasks, 3, requestFn);
 */
const fetchAll = (
  tasks: AnyArray,
  maxConcurrency: number,
  requestFn: AnyFunction
): Promise<AnyArray> => {
  if (!Array.isArray(tasks) && getType(requestFn) !== 'Function') return Promise.all([]);
  const semaphore = Semaphore(maxConcurrency || 5);
  const promises = tasks.map(async (task) => {
    try {
      return await semaphore.use(() => requestFn(task));
    } catch (error) {
      return { error };
    }
  });
  return Promise.all(promises);
};

export default fetchAll;
