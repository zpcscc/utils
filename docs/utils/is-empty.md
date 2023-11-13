---
group:
  title: is函数
title: isEmpty
---

# 介绍

检查"value"是否为空。

```js
import { isEmpty } from '@zpcscc/utils';

console.log(isEmpty()); // true
console.log(isEmpty('')); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(void 0)); // true
console.log(isEmpty(Number.NaN); // true
console.log(isEmpty(123); // false
console.log(isEmpty('123'); // false
console.log(isEmpty({}); // true
console.log(isEmpty([]); // true
console.log(isEmpty({a:1}); // false
console.log(isEmpty([1,2,3]); // false
console.log(isEmpty(new Map([[1,2],[3,4]])); // false
console.log(isEmpty(new Set([1,2,3])); // false
```

## API

```typescript
isEmpty(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要判断的值 | any  |

### 返回

(boolean):返回布尔值
