import validateUrl from 'src/z-validate/validateUrl';

/**
 * @name 解析Url中的参数
 * @param {string} value 需要解析的url地址
 * @return {Record<string, any>} 返回分析完成的url地址的对象；例：{ name: 'test', id: '123' }
 * @example <caption>ts类型</caption>
parseQuery(value: string);
 * @example <caption>demo</caption>
import { parseQuery } from '@zpcscc/utils';

console.log(parseQuery('http://example.com?name=test&id=123')); // { name: 'test', id: '123' };
console.log(parseColor('123')); // {}
console.log(parseColor('')); // {}
 */
const parseQuery = (value: string): Record<string, any> => {
  if (!validateUrl(value)) return {};
  const param = {};
  value?.replace(/([^&=?]+)=([^&]+)/g, (_, key, value) => (param[key] = value));
  return param;
};

export default parseQuery;
