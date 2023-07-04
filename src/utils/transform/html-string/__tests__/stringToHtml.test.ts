/**
 * @jest-environment jsdom
 */
import stringToHtml from '../stringToHtml';

describe('stringToHtml', () => {
  test('实体字符-转义字符', () => {
    expect(stringToHtml('<内容>')).toBe('&lt;内容&gt;');
  });
  test('空字符串', () => {
    expect(stringToHtml('')).toBe('');
  });
});
