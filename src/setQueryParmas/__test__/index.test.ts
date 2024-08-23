import setQueryParams from '..';

describe('setQueryParams', () => {
  test('should correctly set and update query parameters', () => {
    const result = setQueryParams('https://example.com/path?foo=1', {
      foo: '2',
      bar: '3',
      baz: '4'
    });
    expect(result).toBe('https://example.com/path?foo=2&bar=3&baz=4');
  });

  test('should add query parameters to a URL without any parameters', () => {
    const result = setQueryParams('https://example.com/path', {
      foo: '2',
      bar: '3'
    });
    expect(result).toBe('https://example.com/path?foo=2&bar=3');
  });

  test('should return the original URL if it is invalid', () => {
    const result = setQueryParams('invalid-url', {
      foo: '2',
      bar: '3'
    });
    expect(result).toBe('invalid-url');
  });

  test('should handle an empty params object', () => {
    const result = setQueryParams('https://example.com/path?foo=1', {});
    expect(result).toBe('https://example.com/path?foo=1');
  });

  test('should return the original URL if no params are passed', () => {
    const result = setQueryParams('https://example.com/path?foo=1');
    expect(result).toBe('https://example.com/path?foo=1');
  });

  test('should correctly handle parameters with special characters', () => {
    const result = setQueryParams('https://example.com/path', {
      'foo bar': 'baz@qux',
      'special?chars': 'yes&no'
    });
    expect(result).toBe('https://example.com/path?foo+bar=baz%40qux&special%3Fchars=yes%26no');
  });
});
