/**
 * @name 获取某个日期位于当年的第几天
 * @param {Date} value 需要计算的日期，不传的话，默认是当前日期
 */
const getDayOfYear = (value?: Date): number => {
  // 若没有传值，则使用当前日期
  let date = value || new Date(Date.now());
  // 若值为字符串，则将日期字符串，转为日期格式的数据
  if (typeof date === 'string') {
    date = new Date(date);
  }
  // @ts-expect-error 日期计算
  return Math.floor((date - new Date(date?.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};

export default getDayOfYear;
