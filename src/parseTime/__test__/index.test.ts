import parseTime from '..';

describe('parseTime', () => {
  const getTimestampFromDateString = (dateString) => new Date(dateString).getTime();

  test('应返回带破折号分隔符的有效日期字符串的正确时间分量', () => {
    const input = '2000-09-10 10:30'; // Example with dash separator and time
    const timestamp = getTimestampFromDateString('2000-09-10T10:30:00');

    const expected = {
      days: Math.floor(timestamp / (24 * 60 * 60 * 1000)),
      hours: new Date(timestamp).getUTCHours(),
      minutes: new Date(timestamp).getUTCMinutes(),
      seconds: new Date(timestamp).getUTCSeconds()
    };

    expect(parseTime(input)).toEqual(expected);
  });

  test('应返回带斜线分隔符的有效日期字符串的正确时间分量', () => {
    const input = '2000/09/10 10:30'; // Example with slash separator and time
    const timestamp = getTimestampFromDateString('2000-09-10T10:30:00');

    const expected = {
      days: Math.floor(timestamp / (24 * 60 * 60 * 1000)),
      hours: new Date(timestamp).getUTCHours(),
      minutes: new Date(timestamp).getUTCMinutes(),
      seconds: new Date(timestamp).getUTCSeconds()
    };

    expect(parseTime(input)).toEqual(expected);
  });

  test('应返回正确的时间分量以获得有效的时间戳', () => {
    const timestamp = 1000000000000; // Example timestamp
    const input = timestamp;

    const expected = {
      days: Math.floor(timestamp / (24 * 60 * 60 * 1000)),
      hours: new Date(timestamp).getUTCHours(),
      minutes: new Date(timestamp).getUTCMinutes(),
      seconds: new Date(timestamp).getUTCSeconds()
    };

    expect(parseTime(input)).toEqual(expected);
  });

  test('应返回当前时间的正确时间分量', () => {
    const timestamp = Date.now();
    const input = timestamp;

    const expected = {
      days: Math.floor(timestamp / (24 * 60 * 60 * 1000)),
      hours: new Date(timestamp).getUTCHours(),
      minutes: new Date(timestamp).getUTCMinutes(),
      seconds: new Date(timestamp).getUTCSeconds()
    };

    expect(parseTime(input)).toEqual(expected);
  });

  test('应处理时间戳为零的边缘情况', () => {
    const timestamp = 0; // Epoch time
    const input = timestamp;

    const expected = {
      days: Math.floor(timestamp / (24 * 60 * 60 * 1000)),
      hours: new Date(timestamp).getUTCHours(),
      minutes: new Date(timestamp).getUTCMinutes(),
      seconds: new Date(timestamp).getUTCSeconds()
    };

    expect(parseTime(input)).toEqual(expected);
  });

  test('应返回无效时间戳的当前时间分量', () => {
    const invalidTimestamp = Number.NaN;
    const currentTimestamp = Date.now();

    const expected = {
      days: Math.floor(currentTimestamp / (24 * 60 * 60 * 1000)),
      hours: new Date(currentTimestamp).getUTCHours(),
      minutes: new Date(currentTimestamp).getUTCMinutes(),
      seconds: new Date(currentTimestamp).getUTCSeconds()
    };

    expect(parseTime(invalidTimestamp)).toEqual(expected);
  });
});
