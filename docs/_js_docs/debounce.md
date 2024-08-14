# debounce-防抖

## 描述

<p>防抖函数</p>

## 参数

| 参数名 | 类型                  | 描述                  |
| ------ | --------------------- | --------------------- |
| func   | <code>function</code> | <p>需要防抖的函数</p> |
| wait   | <code>number</code>   | <p>防抖等待的时间</p> |

## 返回

<code>function</code> - <p>返回防抖后的函数</p>

## 示例 _(ts类型)_

```typescript
debounce(func: AnyFunction, wait: number): AnyFunction
```

## 示例 _(demo)_

```typescript
import { debounce } from '@zpcscc/utils';

const test = () => {
  console.log('执行一次');
};

const debounceTest = debounce(test, 300);

debounceTest();
debounceTest();
debounceTest(); // 执行一次；
```
