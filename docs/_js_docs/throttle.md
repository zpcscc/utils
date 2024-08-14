# throttle-节流

## 描述

<p>节流函数</p>

## 参数

| 参数名 | 类型                  | 描述                  |
| ------ | --------------------- | --------------------- |
| func   | <code>function</code> | <p>需要节流的函数</p> |
| limit  | <code>number</code>   | <p>节流等待的时间</p> |

## 返回

<code>function</code> - <p>返回节流后的函数</p>

## 示例 _(ts类型)_

```typescript
throttle(func: AnyFunction, limit: number): AnyFunction
```

## 示例 _(demo)_

```typescript
import { throttle } from '@zpcscc/utils';

const test = () => {
  console.log('执行一次');
};

const throttleTest = throttle(test, 300);

// 300ms后
throttleTest(); // 执行一次；
throttleTest();
// 300ms后
throttleTest(); // 执行一次；
throttleTest();
// 300ms后
throttleTest(); // 执行一次；
```
