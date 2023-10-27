---
group:
  title: 其他
  order: 999
title: walkSplit
---

# 逐步拆分-生成器

这是一个逐步拆分字符串的生成器。可以生成一个迭代器。每次调用 next，会返回当前步骤拆分的字符串内容。

## 在线演示

<code src="./walkSplit"></code>

## 代码演示

```typescript
import { walkSplit } from '@dxsixpc/utils';

// 生成一个拆分版本号的迭代器
const iterator = walkSplit('1.2.3-alpha.5', ['.', '-']);
// 每次调用next,可以获取下一步拆分出来的数据。
console.log(iterator.next()); // { done: false, value: '1' }
console.log(iterator.next()); // { done: false, value: '2' }
console.log(iterator.next()); // { done: false, value: '3' }
console.log(iterator.next()); // { done: false, value: 'alpha' }
console.log(iterator.next()); // { done: false, value: '5' }
console.log(iterator.next()); // { done: true, value: undefined }

// 也可以使用 for of 遍历迭代器获取 value
for (const item of iterator) {
  console.log(item); // 依次打印 1 2 3 alpha 5
}
```

## API

```typescript
walkSplit(data:string,terminals:string[]);
```

### 参数

| 参数      | 说明                           | 类型     |
| --------- | ------------------------------ | -------- |
| data      | 需要拆分的字符串数据           | string   |
| terminals | 拆分的终止符，数组，可以有多个 | string[] |

### 返回

(iterator):返回一个迭代器。可使用.next()，获取下一步的数据。
