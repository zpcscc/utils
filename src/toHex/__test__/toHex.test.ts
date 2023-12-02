import toHex from '..';

describe('toHex', () => {
  test('数字', () => {
    expect(toHex(123)).toBe('7b');
  });
});
