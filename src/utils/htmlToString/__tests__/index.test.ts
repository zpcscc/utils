/**
 * @jest-environment jsdom
 */
import { htmlToString } from '../index';

describe('htmlToString', () => {
  test('html字符串代码', () => {
    expect(htmlToString('<div>&lt;内容&gt;</div>')).toBe('<内容>');
  });
  test('空字符串', () => {
    expect(htmlToString('')).toBe('');
  });
});
