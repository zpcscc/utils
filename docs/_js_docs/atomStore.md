# AtomStore

## 描述

<p>状态管理器，用于管理全局状态</p>

## 示例 _(demo)_

```typescript
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
```
