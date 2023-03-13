/**
 * @jest-environment jsdom
 */
import relativeToAbsolute from '../relativeToAbsolute';

test('相对路径转绝对路径', () => {
  expect(relativeToAbsolute('/utils/logo.png')).toBe('http://localhost/utils/logo.png');
});
