---
group:
  title: 函数
title: throttle
---

# 节流函数

## 描述

创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 pending 方法获取函数是否在等待中。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。

## 代码演示

```js
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

## API

```typescript
throttle(func: Function, wait?: number, options?: { leading?: boolean, maxWait?: number, trailing?: boolean });
```

### 参数

| 参数    | 说明                   | 类型      |
| ------- | ---------------------- | --------- |
| func    | 需要进行防抖处理的函数 | `()=>{}`  |
| wait    | 延迟毫秒数             | `number`  |
| options | 选项                   | `options` |

#### options

| 参数     | 说明                         | 类型      |
| -------- | ---------------------------- | --------- |
| leading  | 指定在延迟开始前调用         | boolean   |
| maxWait  | 设置 func 允许被延迟的最大值 | number ｜ |
| trailing | 指定在延迟结束后调用         | boolean   |

### 返回

(function): 返回节流函数
