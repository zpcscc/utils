import throttle from '..';

jest.useFakeTimers(); // 使用 Jest 模拟计时器

describe('throttle', () => {
  test('立即执行测试', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn(); // 第一次调用
    expect(mockFn).toHaveBeenCalledTimes(1); // 立即执行

    jest.advanceTimersByTime(1000); // 前进 1000 毫秒
    throttledFn(); // 再次调用
    expect(mockFn).toHaveBeenCalledTimes(2); // 再次执行
  });

  test('节流时间内多次调用', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn(); // 第一次调用
    expect(mockFn).toHaveBeenCalledTimes(1); // 立即执行

    throttledFn(); // 第二次调用，应该被忽略
    expect(mockFn).toHaveBeenCalledTimes(1); // 未执行

    jest.advanceTimersByTime(500); // 前进 500 毫秒
    throttledFn(); // 第三次调用，仍然在节流期内
    expect(mockFn).toHaveBeenCalledTimes(1); // 仍然未执行

    jest.advanceTimersByTime(500); // 再前进 500 毫秒，总共 1000 毫秒
    throttledFn(); // 节流时间结束后调用
    expect(mockFn).toHaveBeenCalledTimes(2); // 第二次执行
  });

  test('快速连续调用', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn(); // 快速连续调用三次

    expect(mockFn).toHaveBeenCalledTimes(1); // 只应调用一次

    jest.advanceTimersByTime(1000); // 前进 1000 毫秒
    expect(mockFn).toHaveBeenCalledTimes(1); // 仍然只调用了一次

    throttledFn(); // 1000 毫秒后再次调用
    expect(mockFn).toHaveBeenCalledTimes(2); // 现在应该调用第二次
  });

  test('上下文绑定', () => {
    const context = { value: 42 };
    const mockFn = jest.fn(function () {
      return this.value;
    });

    const throttledFn = throttle(mockFn.bind(context), 1000);
    throttledFn();

    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn.mock.results[0].value).toBe(42); // 确保上下文绑定正确
  });

  test('参数传递', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn('arg1', 'arg2'); // 调用时传入参数

    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2'); // 检查传递参数是否正确
  });
});
