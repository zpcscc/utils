import { htmlToString } from './index';

test('html转string', () => {
  expect(htmlToString('<div>&lt;内容&gt;</div>')).toBe('<内容>');
});
