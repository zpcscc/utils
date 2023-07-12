---
group:
  title: 语言
title: toFinite
---

# 介绍

转换"value"转为一个有限数字。

```js
import { toFinite } from '@dxsixpc/utils';

console.log(toFinite(3.2)); // 3.2
console.log(toFinite('3.2')); // 3.2
console.log(toFinite(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toFinite(Number.MIN_VALUE)); // 5e-324
```

## API

```typescript
toFinite(value: any);
```

### 参数

| 参数  | 说明                 | 类型 |
| ----- | -------------------- | ---- |
| value | 需要转换的数字或字符 | any  |

### 返回

(number):返回转换后的有限数字。
