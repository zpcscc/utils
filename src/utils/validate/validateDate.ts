/**
 * @name 验证日期
 */
const validateDate = (data: string) => {
  return !Number.isNaN(new Date(data).valueOf());
};

export default validateDate;
