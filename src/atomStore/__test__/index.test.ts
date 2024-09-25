import AtomStore from '..';

type AppState = {
  count: number;
  user: { name: string };
};

describe('AtomStore', () => {
  let store: AtomStore<AppState>;

  beforeEach(() => {
    store = new AtomStore<AppState>({ count: 0, user: { name: 'Alice' } });
  });

  it('应使用正确的状态进行初始化', () => {
    expect(store.getState('count')).toBe(0);
    expect(store.getState('user')).toEqual({ name: 'Alice' });
  });

  it('应正确更新状态', () => {
    store.setState({ count: 1 });
    expect(store.getState('count')).toBe(1);
  });

  it('应通知订阅者特定密钥的状态更改', () => {
    const countSubscriber = jest.fn();
    const userSubscriber = jest.fn();

    store.subscribe('count', countSubscriber);
    store.subscribe('user', userSubscriber);

    store.setState({ count: 2 });
    store.setState({ user: { name: 'Bob' } });

    expect(countSubscriber).toHaveBeenCalledWith(2, 0); // newValue = 2, oldValue = 0
    expect(userSubscriber).toHaveBeenCalledWith({ name: 'Bob' }, { name: 'Alice' });
  });

  it('应通知全球订阅者任何状态更改', () => {
    const globalSubscriber = jest.fn();

    store.subscribe('*', globalSubscriber);

    store.setState({ count: 2 });
    store.setState({ user: { name: 'Bob' } });

    expect(globalSubscriber).toHaveBeenCalledTimes(2); // 两次状态更新
    expect(globalSubscriber).toHaveBeenCalledWith(
      { count: 2, user: { name: 'Alice' } },
      { count: 0, user: { name: 'Alice' } }
    );
    expect(globalSubscriber).toHaveBeenCalledWith(
      { count: 2, user: { name: 'Bob' } },
      { count: 2, user: { name: 'Alice' } }
    );
  });

  it('应允许取消订阅更新', () => {
    const countSubscriber = jest.fn();

    const unsubscribe = store.subscribe('count', countSubscriber);

    store.setState({ count: 3 });
    expect(countSubscriber).toHaveBeenCalledWith(3, 0); // 订阅者应该被调用

    // 取消订阅
    unsubscribe();

    store.setState({ count: 4 });
    expect(countSubscriber).toHaveBeenCalledTimes(1); // 取消订阅后，不应再被调用
  });

  it('应处理同一密钥的多个订阅者', () => {
    const countSubscriber1 = jest.fn();
    const countSubscriber2 = jest.fn();

    store.subscribe('count', countSubscriber1);
    store.subscribe('count', countSubscriber2);

    store.setState({ count: 5 });

    expect(countSubscriber1).toHaveBeenCalledWith(5, 0);
    expect(countSubscriber2).toHaveBeenCalledWith(5, 0);
  });

  it('不应通知未订阅的听众', () => {
    const countSubscriber1 = jest.fn();
    const countSubscriber2 = jest.fn();

    const unsubscribe1 = store.subscribe('count', countSubscriber1);
    store.subscribe('count', countSubscriber2);

    store.setState({ count: 6 });
    expect(countSubscriber1).toHaveBeenCalledWith(6, 0);
    expect(countSubscriber2).toHaveBeenCalledWith(6, 0);

    // 取消第一个订阅者
    unsubscribe1();
    store.setState({ count: 7 });

    expect(countSubscriber1).toHaveBeenCalledTimes(1); // 第一个订阅者不应再被调用
    expect(countSubscriber2).toHaveBeenCalledWith(7, 6); // 第二个订阅者仍然应该被调用
  });

  it('应处理部分更新的状态更改', () => {
    store.setState({ user: { name: 'Charlie' } });
    expect(store.getState('user')).toEqual({ name: 'Charlie' });
    expect(store.getState('count')).toBe(0); // count 应该保持不变
  });

  it('当键未定义时，应返回整个状态', () => {
    const state = store.getState(); // 没有传入 key
    expect(state).toEqual({ count: 0, user: { name: 'Alice' } });
  });

  it('当密钥没有侦听器时，应处理取消订阅', () => {
    const countSubscriber = jest.fn();

    // 订阅 'count'，并检查是否成功订阅
    const unsubscribe = store.subscribe('count', countSubscriber);

    // 更新状态，确保订阅者被调用
    store.setState({ count: 5 });
    expect(countSubscriber).toHaveBeenCalledTimes(1); // 应该被调用一次

    // 再次调用 setState 并验证是否仍然能触发
    store.setState({ count: 6 });
    expect(countSubscriber).toHaveBeenCalledTimes(2); // 第二次更新，应该被调用两次

    // 取消订阅
    unsubscribe();

    // 更新状态后，订阅者不应再被调用
    store.setState({ count: 7 });
    expect(countSubscriber).toHaveBeenCalledTimes(2); // 取消订阅后，调用次数不应增加

    // 取消不存在的 key 时不应抛出错误
    expect(() => {
      store.unsubscribe('nonExistentKey' as keyof AppState, countSubscriber);
    }).not.toThrow();
  });
});
