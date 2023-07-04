/**
 * @jest-environment jsdom
 */
import htmlToString from '../htmlToString';

describe('htmlToString', () => {
  test('转义字符-实体字符', () => {
    expect(htmlToString('&lt;内容&gt;')).toBe('<内容>');
  });
  test('空字符串', () => {
    expect(htmlToString('')).toBe('');
  });
});
