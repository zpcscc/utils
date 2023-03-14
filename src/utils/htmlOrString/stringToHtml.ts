/**
 * @name 字符转实体字符
 */
const stringToHtml = (string: string): string => {
  const divDom = document.createElement('div');
  divDom.textContent = string;
  return divDom.innerHTML || string || '';
};

export default stringToHtml;
