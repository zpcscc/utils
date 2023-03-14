/**
 * @name 实体字符转字符串
 */
const htmlToString = (html: string): string => {
  const divDom = document.createElement('div');
  divDom.innerHTML = html;
  return divDom.textContent || html || '';
};

export default htmlToString;
