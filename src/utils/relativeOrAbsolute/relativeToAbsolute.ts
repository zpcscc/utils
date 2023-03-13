/**
 * @name 相对路径转绝对路径
 */
const relativeToAbsolute = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  return a.href;
};

export default relativeToAbsolute;
