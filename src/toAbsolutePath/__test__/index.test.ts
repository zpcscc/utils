/**
 * @jest-environment jsdom
 */
import toAbsolutePath from '..';

test('相对路径转绝对路径', () => {
  expect(toAbsolutePath('/utils/logo.png')).toBe('http://localhost/utils/logo.png');
});
