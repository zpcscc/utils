/**
 * @name 去除字符串中的元素标记
 * @param {string} value 需要删除tag的字符串
 */
const removeTag = (value?: string): string => {
  if (!value) return '';
  return new DOMParser()?.parseFromString(value, 'text/html')?.body?.textContent || '';
};

export default removeTag;
