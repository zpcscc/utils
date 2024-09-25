type Listener<T> = (newValue: T, oldValue: T) => void;

/**
 * @name AtomStore
 * @description 状态管理器，用于管理全局状态
 * @example <caption>demo</caption>
import { AtomStore } from '@zpcscc/utils';

// 使用示例
interface AppState {
  count: number;
  user: { name: string };
}

const store = new AtomStore<AppState>({ count: 0, user: { name: 'Alice' } });

// 订阅 count 的变化
const unsubscribeCount = store.subscribe('count', (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

// 订阅全局状态的变化
const unsubscribeGlobal = store.subscribe('*', (newState, prevState) => {
  console.log('Global state changed', prevState, '->', newState);
});

// 获取当前 count 值
console.log(store.getState('count')); // 输出: 0

// 更新 count 和 user.name
store.setState({ count: 1, user: { name: 'Bob' } });

// 取消订阅 count 的变化
unsubscribeCount();
 */
class AtomStore<State extends Record<string, any>> {
  private state: State;
  private listeners: Map<keyof State | '*', Listener<any>[]>;

  constructor(initialState: State) {
    this.state = { ...initialState };
    this.listeners = new Map();
  }

  // 获取状态
  getState<K extends keyof State>(key?: K): State[K] | State {
    return key ? this.state[key] : this.state;
  }

  // 更新状态并通知订阅者
  setState(updates: Partial<State>): void {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...updates };

    // 通知全局订阅者
    if (this.listeners.has('*')) {
      this.listeners.get('*')!.forEach((callback) => callback(this.state, prevState));
    }

    // 通知单个键订阅者
    (Object.keys(updates) as (keyof State)[]).forEach((key) => {
      if (this.listeners.has(key)) {
        this.listeners.get(key)!.forEach((callback) => callback(this.state[key], prevState[key]));
      }
    });
  }

  // 订阅某个键值或全局状态
  subscribe<K extends keyof State>(
    key: K | '*',
    callback: Listener<K extends '*' ? State : State[K]>
  ): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key)!.push(callback);

    // 返回取消订阅的函数
    return () => this.unsubscribe(key, callback);
  }

  // 取消订阅
  unsubscribe<K extends keyof State>(
    key: K | '*',
    callback: Listener<K extends '*' ? State : State[K]>
  ): void {
    if (this.listeners.has(key)) {
      const filteredListeners = this.listeners
        .get(key)!
        .filter((listener) => listener !== callback);
      this.listeners.set(key, filteredListeners);
    }
  }
}

export default AtomStore;
