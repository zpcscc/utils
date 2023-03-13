/**
 * @name 转义的html数据还原成string
 */
const htmlToString = (htmlString: string) => {
  const divDom = document.createElement('div');
  divDom.innerHTML = htmlString;
  return divDom.innerText || divDom.textContent || htmlString;
};

export default htmlToString;
