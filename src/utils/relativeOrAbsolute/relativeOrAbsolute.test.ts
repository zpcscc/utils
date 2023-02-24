import { relativeToAbsolute } from './index';

test('相对路径转绝对路径', () => {
  expect(relativeToAbsolute('/utils/logo.png')).toBe('http://localhost/utils/logo.png');
});
