/**
 * @name 验证Url链接
 * @param {data} 需要校验数据
 * @return {boolean} 返回校验的结果
 */
const validateUrl = (data: string) => {
  return /^(http|https|ftp|file):\/\/([\w.]+\/?)\S*/.test(data);
};

export default validateUrl;
