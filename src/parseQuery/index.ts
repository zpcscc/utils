import validateUrl from 'src/validate/validateUrl';

/**
 * @name 解析Url中的参数
 * @param {string} value 需要解析的url地址
 * @return {Record<string, any>} 返回解析后的参数
 */
const parseQuery = (value: string): Record<string, any> => {
  if (!validateUrl(value)) return {};
  const param = {};
  value?.replace(/([^&=?]+)=([^&]+)/g, (_, key, value) => (param[key] = value));
  return param;
};

export default parseQuery;
