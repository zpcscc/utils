# 节流函数

## 描述

<p>创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 pending 方法获取函数是否在等待中。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。</p>

## 参数

| 参数名           | 类型                     | 默认值                      | 描述                          |
| ---------------- | ------------------------ | --------------------------- | ----------------------------- |
| func             | <code>AnyFunction</code> | <code>()&#x3D;&gt;{}</code> | <p>传入一个需要节流的函数</p> |
| wait             | <code>number</code>      | <code>0</code>              | <p>节流调用限制的毫秒数;</p>  |
| options          | <code>Object</code>      | <code>{}</code>             | <p>配置选项</p>               |
| options.leading  | <code>boolean</code>     | <code>true</code>           | <p>指定在超时的前沿调用。</p> |
| options.trailing | <code>boolean</code>     | <code>true</code>           | <p>指定在超时的后沿调用。</p> |

## 返回

(<code>AnyFunction</code>)：<p>返回新的节流函数</p>

## 示例

### ts类型

```typescript
throttle(
  func: Function,
  wait?: number,
  options?: {
    leading?: boolean,
    trailing?: boolean
  }
);
```

### demo

```typescript
import { throttle } from '@zpcscc/utils';

const throttleFunc = throttle(function () {
  console.log(1);
}, 100);
throttleFunc();
throttleFunc();
throttleFunc();
throttleFunc();
// 每隔100豪秒输出一次1
```
