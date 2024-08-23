import toTimestamp from '..';

describe('toTimestamp', () => {
  test('应返回有效日期字符串的正确时间戳', () => {
    const input = '2024-08-23T12:34:56.789Z';
    const expectedTimestamp = new Date(input).getTime();
    expect(toTimestamp(input)).toBe(expectedTimestamp);
  });

  test('应返回带破折号分隔符的有效日期字符串的正确时间戳', () => {
    const input = '2000-09-10 10:30'; // Example with dash separator and time
    const expectedTimestamp = new Date('2000-09-10T10:30:00').getTime();
    expect(toTimestamp(input)).toBe(expectedTimestamp);
  });

  test('应返回带斜线分隔符的有效日期字符串的正确时间戳', () => {
    const input = '2000/09/10 10:30'; // Example with slash separator and time
    const expectedTimestamp = new Date('2000-09-10T10:30:00').getTime();
    expect(toTimestamp(input)).toBe(expectedTimestamp);
  });

  test('对于使用混合分隔符的有效日期字符串，应返回正确的时间戳', () => {
    const input = '2000/09/10 10:30:45'; // Example with mixed separators and time
    const expectedTimestamp = new Date('2000-09-10T10:30:45').getTime();
    expect(toTimestamp(input)).toBe(expectedTimestamp);
  });

  test('应为带有混合分隔符和毫秒的有效日期字符串返回正确的时间戳', () => {
    const input = '2000/09/10 10:30:45.678'; // Example with milliseconds
    const expectedTimestamp = new Date('2000-09-10T10:30:45.678').getTime();
    expect(toTimestamp(input)).toBe(expectedTimestamp);
  });

  test('应为包含完整日期和时间的有效日期字符串返回正确的时间戳', () => {
    const input = '2000-09-10T10:30:45'; // Example with full date and time
    const expectedTimestamp = new Date(input).getTime();
    expect(toTimestamp(input)).toBe(expectedTimestamp);
  });

  test('应为Date对象返回正确的时间戳', () => {
    const date = new Date('2024-08-23T12:34:56.789Z');
    const expectedTimestamp = date.getTime();
    expect(toTimestamp(date)).toBe(expectedTimestamp);
  });

  test('应为有效时间戳返回正确的时间戳', () => {
    const input = 1692791696789; // Example timestamp
    expect(toTimestamp(input)).toBe(input);
  });

  test('应返回无效日期字符串的当前时间戳', () => {
    const invalidDate = 'invalid date';
    const currentTimestamp = Date.now();
    expect(toTimestamp(invalidDate)).toBe(currentTimestamp);
  });

  test('应返回不支持的输入类型的当前时间戳', () => {
    const input = {};
    const currentTimestamp = Date.now();
    expect(toTimestamp(input)).toBe(currentTimestamp);
  });

  test('应返回无效数字的当前时间戳', () => {
    const invalidNumber = Number.NaN;
    const currentTimestamp = Date.now();
    expect(toTimestamp(invalidNumber)).toBe(currentTimestamp);
  });

  test('引发异常时应返回当前时间戳', () => {
    // Overwrite Date.parse to throw an error
    const originalDateParse = Date.parse;
    Date.parse = () => {
      throw new Error('Test error');
    };

    const currentTimestamp = Date.now();
    expect(toTimestamp('2024-08-23T12:34:56.789Z')).toBe(currentTimestamp);

    // Restore original Date.parse
    Date.parse = originalDateParse;
  });
});
