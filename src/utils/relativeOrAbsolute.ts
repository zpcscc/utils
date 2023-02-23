// 通过浏览器将相对路径转为绝对路径
/**
 * @name 相对路径转绝对路径
 */
export const relativeToAbsolute = (url: string) => {
  const a = document.createElement('a');
  a.href = url;
  return a.href;
};
