import copyStrByNum from '..';

describe('copyStrByNum-复制字符串', () => {
  test('copyStrByNum', () => {
    expect(copyStrByNum('*', 5)).toBe('*****');
    expect(copyStrByNum('张三', 3)).toBe('张三张三张三');
    expect(copyStrByNum('李四', 4, '-')).toBe('李四-李四-李四-李四');
    expect(copyStrByNum('Name')).toBe('Name');
  });
});
