/**
 * @name 相对路径转绝对路径
 * @param {string} url 相对路径url
 * @return {string} 返回绝对路径url
 */
const relativeToAbsolute = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  return a.href;
};

export default relativeToAbsolute;
