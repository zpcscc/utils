import getDayOfDate from '..';

describe('getDayOfDate', () => {
  test('正常传值-距今多少天', () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3);
    expect(getDayOfDate(pastDate.toISOString())).toBe(3);
    expect(getDayOfDate(pastDate)).toBe(3);
  });
  test('正常传值-还有多少天到某个日期', () => {
    const pastDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 10);
    // 倒计时多少天，会加上今天的1天
    expect(getDayOfDate(pastDate.toISOString())).toBe(11);
    expect(getDayOfDate(pastDate)).toBe(11);
  });
  test('返回值为0的情况', () => {
    expect(getDayOfDate(new Date())).toBe(0);
    expect(getDayOfDate('2000-00-00')).toBe(0);
    expect(getDayOfDate()).toBe(0);
  });
});
