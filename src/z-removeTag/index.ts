/**
 * @name 去除字符串中的元素标记
 * @param {string} value 需要删除tag的字符串
 * @return {string} 返回没有tag的字符串
 * @example <caption>ts类型</caption>
removeTag(html:string);
 * @example <caption>demo</caption>
import { removeTag } from '@zpcscc/utils';

console.log(removeTag('<p>Hello World!</p>')); // Hello World!
console.log(removeTag('Hello World!')); // Hello World!
console.log(removeTag(null)); // ''
console.log(removeTag('')); // ''
 */
const removeTag = (value?: string): string => {
  if (!value) return '';
  return new DOMParser()?.parseFromString(value, 'text/html')?.body?.textContent || '';
};

export default removeTag;
