/**
 * @name 去除字符串中的元素标记
 * @param {string} value 需要复制到剪切板的数据
 */
const removeTag = (value: string): string => {
  return new DOMParser().parseFromString(value, 'text/html').body.textContent || '';
};

export default removeTag;
