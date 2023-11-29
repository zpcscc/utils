/**
 * @jest-environment jsdom
 */
import desensitize from '.';

describe('desensitize-脱敏测试', () => {
  test('正常输入测试', () => {
    expect(desensitize('<p>Hello World!</p>')).toBe('Hello World!');
  });
});
