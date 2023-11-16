---
group:
  title: 函数
title: debounce
---

# 防抖函数

## 描述

创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 pending 方法获取防抖函数是否在等待中。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。

## 代码演示

```js
import { debounce } from '@zpcscc/utils';

const debouncedFunc = debounce(function () {
  console.log(1);
}, 100);
debouncedFunc();
debouncedFunc();
debouncedFunc();
debouncedFunc(); // 只在最后一次调用完成后100豪秒后输出1
```

## API

```typescript
debounce(func: Function, wait?: number, options?: { leading?: boolean, maxWait?: number, trailing?: boolean });
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

(function): 返回防抖函数
