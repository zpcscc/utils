/**
 * @name setQueryParmas
 * @description 设置url携带的参数
 * @param {string} url 需要解析的url链接或字符串
 * @return {object} 返回解析后的query参数
 * @example <caption>ts类型</caption>
setQueryParmas(url:string)
 * @example <caption>demo</caption>
import { setQueryParmas } from '@zpcscc/utils';

const updatedUrl1 = setQueryParams('https://example.com/path?foo=1', {
    foo: '2',
    bar: '3',
    baz: '4'
});

const updatedUrl2 = setQueryParams('invalid-url', {
    foo: '2',
    bar: '3',
    baz: '4'
});

console.log(updatedUrl1); // 输出: https://example.com/path?foo=2&bar=3&baz=4
console.log(updatedUrl2); // 输出: invalid-url
 */
const setQueryParmas = (url: string, params: AnyObject = {}): string => {
  try {
    const urlObj = new URL(url);

    Object.keys(params).forEach((key) => {
      urlObj.searchParams.set(key, params[key]);
    });

    return urlObj.toString();
  } catch {
    // 返回原始URL
    return url;
  }
};

export default setQueryParmas;
