# 防抖函数

## 描述

<p>创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 pending 方法获取防抖函数是否在等待中。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。</p>

## 参数

| 参数名           | 类型                     | 默认值                      | 描述                                                                         |
| ---------------- | ------------------------ | --------------------------- | ---------------------------------------------------------------------------- |
| func             | <code>AnyFunction</code> | <code>()&#x3D;&gt;{}</code> | <p>需要进行防抖的函数</p>                                                    |
| wait             | <code>number</code>      | <code>0</code>              | <p>要延迟的毫秒数；如果省略，“requestAnimationFrame”为已使用（如果可用）</p> |
| options          | <code>Object</code>      | <code>{}</code>             | <p>选项对象</p>                                                              |
| options.leading  | <code>boolean</code>     | <code>false</code>          | <p>指定在超时的前沿调用</p>                                                  |
| options.maxWait  | <code>number</code>      | <code>0</code>              | <p>允许在调用“func”之前延迟最长时间</p>                                      |
| options.trailing | <code>boolean</code>     | <code>true</code>           | <p>指定在超时的后沿调用</p>                                                  |

## 返回

(<code>function</code>)：<p>返回新的防抖函数</p>

## 示例

### ts类型

```typescript
debounce(
  func: Function,
  wait?: number,
  options?: {
    leading?: boolean,
    maxWait?: number,
    trailing?: boolean
  }
);
```

### demo

```typescript
import { debounce } from '@zpcscc/utils';
const debouncedFunc = debounce(() => {
  console.log(1);
}, 100);
debouncedFunc();
debouncedFunc();
debouncedFunc();
debouncedFunc(); // 只在最后一次调用完成后100豪秒后输出1
```
