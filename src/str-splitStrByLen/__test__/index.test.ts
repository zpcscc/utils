import splitStrByLen from '..';

describe('splitStrByLen-分割字符串为数组', () => {
  test('splitStrByLen', () => {
    expect(splitStrByLen('张三张三张三', 2)).toStrictEqual(['张三', '张三', '张三']);
    expect(splitStrByLen('123456789', 3)).toStrictEqual(['123', '456', '789']);
    expect(splitStrByLen('1234567890', 4)).toStrictEqual(['1234', '5678', '90']);
  });
});
