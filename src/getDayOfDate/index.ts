/**
 * @name 获取某个日期距今多少天,或还差多少天到某个日期
 * @param {Date | string} value 需要计算的日期，不传的话，默认是当前日期,返回0天
 */
const getDayOfDate = (value?: Date | string): number => {
  let result = 0;
  if (!value) return result;
  // 若没有传值，则使用当前日期
  let date = value;
  // 若值为字符串，则将日期字符串，转为日期格式的数据
  if (typeof date === 'string') {
    date = new Date(date);
  }
  // @ts-expect-error 日期计算
  result = Math.floor(Math.abs(new Date(Date.now() - date)) / 1000 / 60 / 60 / 24);
  // @ts-expect-error 日期计算
  if (date - Date.now() > 0) {
    result += 1;
  }
  if (Number.isNaN(result)) return 0;
  return result;
};

export default getDayOfDate;
