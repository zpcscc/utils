import countdown from '..';

describe('countdown', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // 使用虚拟定时器
  });

  afterEach(() => {
    jest.useRealTimers(); // 恢复真实定时器
    jest.clearAllTimers(); // 清除所有计时器
    jest.clearAllMocks(); // 清除所有模拟函数调用记录
  });

  it('应立即调用带有正确时间分量的onTick', (done) => {
    const startTime = Date.now(); // 当前时间戳
    const endTime = new Date(startTime + 10000).toISOString(); // 10秒后的时间戳

    const expectedComponents = { days: 0, hours: 0, minutes: 0, seconds: 10 };

    countdown({
      endTime,
      onTick: (components) => {
        expect(components).toEqual(expectedComponents);
        done();
      },
      onEnd: () => {},
      interval: 1000
    });
  }, 5000);

  it('倒计时结束时应调用onCollect', (done) => {
    const startTime = Date.now(); // 当前时间戳
    const endTime = new Date(startTime + 1000).toISOString(); // 1秒后的时间戳

    countdown({
      endTime,
      onTick: () => {},
      onEnd: () => {
        done(); // 立即触发 done
      }
    });

    jest.advanceTimersByTime(1000); // 推进时间 1 秒
  }, 5000);

  it('应正确处理初始时间<=0', (done) => {
    const startTime = Date.now(); // 当前时间戳
    const endTime = new Date(startTime - 1000).toISOString(); // 1秒前的时间戳

    countdown({
      endTime,
      onTick: (components) => {
        // 当倒计时时间已经过期，应立即返回0
        expect(components).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      },
      onEnd: () => {
        done(); // 立即触发 done
      }
    });
  }, 5000);

  it('倒计时期间应多次调用onTick', (done) => {
    const startTime = Date.now();
    const endTime = new Date(startTime + 5000).toISOString(); // 5秒后的时间戳

    const expectedValues = [
      { days: 0, hours: 0, minutes: 0, seconds: 5 },
      { days: 0, hours: 0, minutes: 0, seconds: 4 },
      { days: 0, hours: 0, minutes: 0, seconds: 3 },
      { days: 0, hours: 0, minutes: 0, seconds: 2 },
      { days: 0, hours: 0, minutes: 0, seconds: 1 },
      { days: 0, hours: 0, minutes: 0, seconds: 0 }
    ];

    let tickCount = 0;
    const onTickMock = jest.fn((components) => {
      expect(components).toEqual(expectedValues[tickCount]);
      tickCount++;
      if (tickCount === expectedValues.length) {
        done(); // 测试完成后调用 done
      }
    });

    countdown({
      endTime,
      onTick: onTickMock,
      onEnd: () => {}
    });

    // 推进时间 5 秒，确保所有 ticks 都被触发
    jest.advanceTimersByTime(5000);
  }, 10000);

  it('如果未提供onTick，则不应抛出错误', (done) => {
    const startTime = Date.now();
    const endTime = new Date(startTime + 1000).toISOString(); // 1秒后的时间戳

    countdown({
      endTime,
      onEnd: () => {
        done(); // 立即触发 done
      }
    });

    jest.advanceTimersByTime(1000); // 推进时间 1 秒
  }, 5000);

  it('如果未提供onEnd，则不应抛出错误', (done) => {
    const startTime = Date.now();
    const endTime = new Date(startTime + 1000).toISOString(); // 1秒后的时间戳

    countdown({
      endTime,
      onTick: (components) => {
        expect(components).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 1 });
      }
    });
    done();
  }, 5000);

  it('应在呼叫停止时停止倒计时', () => {
    const onTick = jest.fn();
    const onEnd = jest.fn();

    const endTime = new Date(Date.now() + 5000).toISOString();
    const { stop } = countdown({ endTime, onTick, onEnd });

    jest.advanceTimersByTime(1000); // 前进1秒钟
    expect(onTick).toHaveBeenCalledTimes(2);

    stop(); // 停止倒计时

    // 在调用 stop 后推进时间，确认倒计时已停止
    jest.advanceTimersByTime(2000); // 再前进2秒钟
    expect(onTick).toHaveBeenCalledTimes(2);
    expect(onEnd).not.toHaveBeenCalled(); // 不应调用
  });

  it('在调用stop后不应调用onTick或onEnd', () => {
    const onTick = jest.fn();
    const onEnd = jest.fn();

    const endTime = new Date(Date.now() + 5000).toISOString();

    const { stop } = countdown({ endTime, onTick, onEnd });

    stop(); // 立即停止

    // 前进5秒钟，超出倒计时范围
    jest.advanceTimersByTime(5000);

    expect(onTick).toHaveBeenCalledTimes(1);
    expect(onEnd).not.toHaveBeenCalled();
  });
});
