/**
 * @name 验证Url链接
 */
const validateUrl = (data: string) => {
  return /^(http|https|ftp|file):\/\/([\w.]+\/?)\S*/.test(data);
};

export default validateUrl;
