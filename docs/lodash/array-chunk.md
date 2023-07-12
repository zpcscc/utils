---
group:
  title: 数组
title: chunk
---

# 介绍

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

```js
import { chunk } from '@dxsixpc/utils';

console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]
```

## API

```typescript
chunk(array: Array, size: number);
```

### 参数

| 参数  | 说明           | 类型   |
| ----- | -------------- | ------ |
| array | 需要拆分的数组 | array  |
| size  | 需要拆分的大小 | number |

### 返回

(Array):返回拆分后的二维数组。
