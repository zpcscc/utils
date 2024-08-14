/**
 * @jest-environment jsdom
 */
import removeTag from '..';

describe('removeTag函数测试', () => {
  test('正常输入测试', () => {
    expect(removeTag('<p>Hello World!</p>')).toBe('Hello World!');
  });

  test('异常输入测试', () => {
    // @ts-expect-error 测试需要
    expect(removeTag(null)).toBe('');
    expect(removeTag('1')).toBe('1');
    expect(removeTag('<p></p>')).toBe('');
  });
});
