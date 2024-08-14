import toString from 'src/toString';

/**
 * @name getQuery-获取url携带的参数
 * @param {string} url 需要解析的url链接或字符串
 * @return {object} 返回解析后的query参数
 * @example <caption>ts类型</caption>
getQuery(url:string)
 * @example <caption>demo</caption>
import { getQuery } from '@zpcscc/utils';

console.log(getQuery('name=John&age=30'));                          //  {name: 'John', age: '30'}
console.log(getQuery(encodeURIComponent('name=John&age=30')));      //  {name: 'John', age: '30'}
console.log(getQuery('www.zpcscc.top?name=John&age=30')));         //  {name: 'John', age: '30'}
 */
const getQuery = (url?: string): Record<string, any> => {
  // 删除？前的所有内容；只保留参数；
  const queryStr = toString(url)?.replace(/^.*?\?/, '');
  return Object.fromEntries(new URLSearchParams(decodeURIComponent(queryStr)));
};

export default getQuery;
