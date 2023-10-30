---
group:
  title: to函数
title: toNumber
---

# 介绍

转换"value"转为一个有限数字。

```js
import { toNumber } from '@dxsixpc/utils';

console.log(toNumber(3.2)); // 3.2
console.log(toNumber('3.2')); // 3.2
console.log(toNumber(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toNumber(Number.MIN_VALUE)); // 5e-324
```

## API

```typescript
toNumber(value: any);
```

### 参数

| 参数  | 说明                 | 类型 |
| ----- | -------------------- | ---- |
| value | 需要转换的数字或字符 | any  |

### 返回

(number):返回转换后的有限数字。
