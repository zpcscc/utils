import isIncludeChinese from '..';

describe('isIncludeChinese-是否包含中文', () => {
  test('正常输入测试', () => {
    expect(isIncludeChinese('章三')).toBe(true);
    expect(isIncludeChinese('章1')).toBe(true);
    expect(isIncludeChinese('张1')).toBe(true);
    expect(isIncludeChinese('<p>Hello World!</p>')).toBe(false);
    expect(isIncludeChinese('Name')).toBe(false);
  });
});
