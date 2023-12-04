/**
 * @name 相对路径转绝对路径
 * @param {string} url 相对路径url
 * @return {string} 返回绝对路径url
 * @example <caption>ts类型</caption>
toAbsolutePath(data:string)
 * @example <caption>demo</caption>
import { toAbsolutePath } from '@zpcscc/utils';

console.log(toAbsolutePath('/img/logo.png')); // https://zpcscc.top/img/logo.png
 */
const toAbsolutePath = (url: string): string => {
  const a = document.createElement('a');
  a.href = url;
  return a.href;
};

export default toAbsolutePath;
