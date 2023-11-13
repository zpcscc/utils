---
group:
  title: to函数
title: toInteger
---

# 介绍

转换“value”为一个整数。

```js
import { toInteger } from '@zpcscc/utils';

console.log(toInteger(3.2)); // 3
console.log(toInteger('3.2')); // 3
console.log(toInteger(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toInteger(Number.MIN_VALUE)); // 0
```

## API

```typescript
toInteger(value: any);
```

### 参数

| 参数  | 说明                 | 类型 |
| ----- | -------------------- | ---- |
| value | 需要转换的数字或字符 | any  |

### 返回

(number):返回转换后的整数。
