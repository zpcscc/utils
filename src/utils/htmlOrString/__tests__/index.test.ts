/**
 * @jest-environment jsdom
 */
import htmlToString from '../htmlToString';
import stringToHtml from '../stringToHtml';

describe('htmlToString', () => {
  test('转义字符-实体字符', () => {
    expect(htmlToString('&lt;内容&gt;')).toBe('<内容>');
  });
  test('空字符串', () => {
    expect(htmlToString('')).toBe('');
  });
});

describe('stringToHtml', () => {
  test('实体字符-转义字符', () => {
    expect(stringToHtml('<内容>')).toBe('&lt;内容&gt;');
  });
  test('空字符串', () => {
    expect(stringToHtml('')).toBe('');
  });
});
