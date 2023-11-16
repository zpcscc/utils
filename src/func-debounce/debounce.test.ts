import root from 'src/root';
import debounce from '.';

const identity = function (value: any) {
  return value;
};
const argv = process ? process.argv : undefined;
const isPhantom = Boolean(root.phantom);
const push = Array.prototype.push;

describe('debounce', () => {
  it('应传入一个函数', () => {
    expect.assertions(1);
    // @ts-expect-error 测试报错
    expect(() => debounce('123')).toThrow('请输入一个函数');
  });

  it('允许取消防抖函数', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    const cancelFunc = debouncedFunc.cancel;
    cancelFunc();
    expect(func).not.toHaveBeenCalled();
    setTimeout(() => {
      cancelFunc();
      expect(func).not.toHaveBeenCalled();
    }, 110);
  });

  it('获取防抖函数是否在执行中', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);
    debouncedFunc();
    const status = debouncedFunc.pending();
    expect(status).toBe(true);
    setTimeout(() => {
      const status = debouncedFunc.pending();
      expect(status).toBe(false);
    }, 200);
  });

  it('应该是一个防抖函数', (done) => {
    let callCount = 0;
    const debounced = debounce((value) => {
      ++callCount;
      return value;
    }, 32);
    const results = [debounced('a'), debounced('b'), debounced('c')];
    expect(results).toEqual([undefined, undefined, undefined]);
    expect(callCount).toBe(0);

    setTimeout(() => {
      expect(callCount).toBe(1);
      const results = [debounced('d'), debounced('e'), debounced('f')];
      expect(results).toEqual(['c', 'c', 'c']);
      expect(callCount).toBe(1);
    }, 128);

    setTimeout(() => {
      expect(callCount).toBe(2);
      done();
    }, 256);
  });

  it('当“wait”为“0”时，不应立即调用“func”`', (done) => {
    let callCount = 0;
    const debounced = debounce(() => {
      ++callCount;
    }, 0);
    debounced();
    debounced();
    expect(callCount).toBe(0);
    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 5);
  });

  it('应应用默认选项', (done) => {
    let callCount = 0;
    const debounced = debounce(
      () => {
        callCount++;
      },
      32,
      {}
    );
    debounced();
    expect(callCount).toBe(0);
    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 64);
  });

  it('应支持“leading”选项', (done) => {
    const callCounts = [0, 0];
    const withLeading = debounce(
      () => {
        callCounts[0]++;
      },
      32,
      { leading: true }
    );
    const withLeadingAndTrailing = debounce(
      () => {
        callCounts[1]++;
      },
      32,
      { leading: true }
    );
    withLeading();
    expect(callCounts[0]).toBe(1);
    withLeadingAndTrailing();
    withLeadingAndTrailing();
    expect(callCounts[1]).toBe(1);
    setTimeout(() => {
      expect(callCounts).toEqual([1, 2]);
      withLeading();
      expect(callCounts[0]).toBe(2);
      done();
    }, 64);
  });

  it('随后的领先去防抖调用返回最后一个“func”结果', (done) => {
    const debounced = debounce(identity, 32, { leading: true, trailing: false });
    const results = [debounced('a'), debounced('b')];
    expect(results).toEqual(['a', 'a']);
    setTimeout(() => {
      const results = [debounced('c'), debounced('d')];
      expect(results).toEqual(['c', 'c']);
      done();
    }, 64);
  });

  it('应支持“trailing”选项', (done) => {
    let withCount = 0;
    let withoutCount = 0;
    const withTrailing = debounce(
      () => {
        withCount++;
      },
      32,
      { trailing: true }
    );
    const withoutTrailing = debounce(
      () => {
        withoutCount++;
      },
      32,
      { trailing: false }
    );
    withTrailing();
    expect(withCount).toBe(0);
    withoutTrailing();
    expect(withoutCount).toBe(0);
    setTimeout(() => {
      expect(withCount).toBe(1);
      expect(withoutCount).toBe(0);
      done();
    }, 64);
  });

  it('应支持“maxWait”选项', (done) => {
    let callCount = 0;
    const debounced = debounce(
      (value) => {
        ++callCount;
        return value;
      },
      32,
      { maxWait: 64 }
    );
    debounced();
    debounced();
    expect(callCount).toBe(0);
    setTimeout(() => {
      expect(callCount).toBe(1);
      debounced();
      debounced();
      expect(callCount).toBe(1);
    }, 128);
    setTimeout(() => {
      expect(callCount).toBe(2);
      done();
    }, 256);
  });

  it('应在紧密循环中支持“maxWait”', (done) => {
    const limit = argv || isPhantom ? 1000 : 320;
    let withCount = 0;
    let withoutCount = 0;
    const withMaxWait = debounce(
      () => {
        withCount++;
      },
      64,
      { maxWait: 128 }
    );
    const withoutMaxWait = debounce(() => {
      withoutCount++;
    }, 96);
    const start = Date.now();
    while (Date.now() - start < limit) {
      withMaxWait();
      withoutMaxWait();
    }
    const actual = [Boolean(withoutCount), Boolean(withCount)];
    setTimeout(() => {
      expect(actual).toEqual([false, true]);
      done();
    }, 1);
  });

  it('在“maxWait”之后，应该为后续被防抖的的呼叫排队`', (done) => {
    let callCount = 0;
    const debounced = debounce(
      () => {
        ++callCount;
      },
      200,
      { maxWait: 200 }
    );
    debounced();
    setTimeout(debounced, 190);
    setTimeout(debounced, 200);
    setTimeout(debounced, 210);
    setTimeout(() => {
      expect(callCount).toBe(2);
      done();
    }, 500);
  });

  it('调用“delayed”时应取消“maxDelayed”', (done) => {
    let callCount = 0;
    const debounced = debounce(
      () => {
        callCount++;
      },
      32,
      { maxWait: 64 }
    );
    debounced();
    setTimeout(() => {
      debounced();
      expect(callCount).toBe(1);
    }, 128);
    setTimeout(() => {
      expect(callCount).toBe(2);
      done();
    }, 192);
  });

  it('应使用正确的参数和“this”绑定调用尾部调用', (done) => {
    let actual;
    let callCount = 0;
    const object = {};

    const debounced = debounce(
      function (value) {
        // @ts-expect-error 测试this
        actual = [this];
        // @ts-expect-error 测试arguments
        // eslint-disable-next-line prefer-rest-params
        push.apply(actual, arguments);
        return ++callCount !== 2;
      },
      32,
      { leading: true, maxWait: 64 }
    );

    while (true) {
      if (!debounced.call(object, 'a')) {
        break;
      }
    }
    setTimeout(() => {
      expect(callCount).toBe(2);
      expect(actual).toEqual([object, 'a']);
      done();
    }, 64);
  });
});
