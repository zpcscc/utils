import debounce from '..';

jest.useFakeTimers(); // 使用 Jest 的模拟计时器

describe('debounce', () => {
  test('调用后等待执行', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled(); // 立即调用时不应该执行

    jest.advanceTimersByTime(1000); // 计时器前进 1000 毫秒
    expect(mockFn).toHaveBeenCalledTimes(1); // 应该在等待时间后调用一次
  });

  test('在等待时间内重复调用', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    jest.advanceTimersByTime(500); // 前进 500 毫秒，时间不足，不应调用
    debouncedFn(); // 再次调用，重置计时器

    jest.advanceTimersByTime(500); // 前进 500 毫秒，仍然不应调用
    expect(mockFn).not.toHaveBeenCalled(); // 仍然未执行

    jest.advanceTimersByTime(500); // 再前进 500 毫秒，等待总时间达到 1000
    expect(mockFn).toHaveBeenCalledTimes(1); // 现在应该调用一次
  });

  test('快速多次调用', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    // 迅速连续调用三次
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(1000); // 前进 1000 毫秒
    expect(mockFn).toHaveBeenCalledTimes(1); // 应该只调用一次
  });

  test('上下文绑定', () => {
    const context = { value: 42 };
    const mockFn = jest.fn(function () {
      return this.value;
    });

    const debouncedFn = debounce(mockFn.bind(context), 1000);
    debouncedFn();

    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn.mock.results[0].value).toBe(42); // 检查上下文绑定是否正确
  });

  test('传递参数', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn('arg1', 'arg2'); // 调用时传入参数

    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2'); // 检查传入参数
  });
});
