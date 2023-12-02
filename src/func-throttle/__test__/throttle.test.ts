import type { AnyFunction } from 'src/types';
import throttle from '..';

const identity = function (value: any) {
  return value;
};

describe('throttle', () => {
  let func: AnyFunction;
  let wait: number;
  let options: { leading?: boolean; trailing?: boolean };

  beforeEach(() => {
    func = jest.fn();
    wait = 100;
    options = { leading: true, trailing: true };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('如果输入不是函数，则应抛出错误', () => {
    // @ts-expect-error 测试类型错误
    expect(() => throttle(123, wait, options)).toThrow(TypeError);
  });

  it('应使用正确的参数调用输入函数', () => {
    const result = throttle(func, wait, options);
    result('arg1', 'arg2');
    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
  });

  it('如果没有提供，则应使用默认选项调用输入函数', () => {
    const result = throttle(func, wait);
    result();
    expect(func).toHaveBeenCalledWith();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('应在提供的等待时间内消除输入函数的抖动', () => {
    const result = throttle(func, 200, options);
    result();
    result();
    result();
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith();
  });

  it('应该是一个节流函数', (done) => {
    let callCount = 0;
    const throttled = throttle(() => {
      callCount++;
    }, 32);
    throttled();
    throttled();
    throttled();
    const lastCount = callCount;
    expect(callCount);
    setTimeout(() => {
      expect(callCount > lastCount);
      done();
    }, 64);
  });

  it('调用一次时不应触发trailing调用', (done) => {
    let callCount = 0;
    const throttled = throttle(() => {
      callCount++;
    }, 32);
    throttled();
    expect(callCount).toBe(1);
    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 64);
  });

  it('应尽快触发第二个节流函数', (done) => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      128,
      { leading: false }
    );
    throttled();
    setTimeout(() => {
      expect(callCount).toBe(1);
      throttled();
    }, 192);
    setTimeout(() => {
      expect(callCount).toBe(1);
    }, 254);
    setTimeout(() => {
      expect(callCount).toBe(2);
      done();
    }, 384);
  });

  it('应应用默认选项', (done) => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      32,
      {}
    );
    throttled();
    throttled();
    expect(callCount).toBe(1);
    setTimeout(() => {
      expect(callCount).toBe(2);
      done();
    }, 128);
  });

  it('应支持“leading”选项', () => {
    const withLeading = throttle(identity, 32, { leading: true });
    expect(withLeading('a')).toBe('a');
    const withoutLeading = throttle(identity, 32, { leading: false });
    expect(withoutLeading('a')).toBe(undefined);
  });

  it('应支持“trailing”选项', (done) => {
    let withCount = 0;
    let withoutCount = 0;
    const withTrailing = throttle(
      (value) => {
        withCount++;
        return value;
      },
      64,
      { trailing: true }
    );
    const withoutTrailing = throttle(
      (value) => {
        withoutCount++;
        return value;
      },
      64,
      { trailing: false }
    );
    expect(withTrailing('a')).toBe('a');
    expect(withTrailing('b')).toBe('a');
    expect(withoutTrailing('a')).toBe('a');
    expect(withoutTrailing('b')).toBe('a');
    setTimeout(() => {
      expect(withCount).toBe(2);
      expect(withoutCount).toBe(1);
      done();
    }, 256);
  });

  it('当“trailing”为“false”时，不应在超时结束时更新“lastCalled”`', (done) => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      64,
      { trailing: false }
    );
    throttled();
    throttled();
    setTimeout(() => {
      throttled();
      throttled();
    }, 96);
    setTimeout(() => {
      expect(callCount > 1);
      done();
    }, 192);
  });
});
