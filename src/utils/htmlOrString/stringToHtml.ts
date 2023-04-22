/**
 * @name 字符转实体字符
 * @param {string} data 需要转换的数据
 * @return {string} 返回转换完成的数据
 */
const stringToHtml = (data: string): string => {
  const divDom = document.createElement('div');
  divDom.textContent = data;
  return divDom.innerHTML || data || '';
};

export default stringToHtml;
