import validateUrl from 'src/validateUrl';

/**
 * @name 解析Url中的参数
 * @param {string} value 需要解析的url地址
 */
const parseQuery = (value: string): Record<string, any> => {
  if (!validateUrl(value)) throw new Error('url地址错误');
  const param = {};
  value?.replace(/([^&=?]+)=([^&]+)/g, (_, key, value) => (param[key] = value));
  return param;
};

export default parseQuery;
