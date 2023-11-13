---
group:
  title: is函数
title: isNumber
---

# 介绍

检查"value"是否为常规数字。

```js
import { isNumber } from '@zpcscc/utils';

console.log(isNumber()); // false
console.log(isNumber('')); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber(void 0)); // false
console.log(isNumber(Number.NaN); // false
console.log(isNumber(Number.POSITIVE_INFINITY); // false
console.log(isNumber(Number.NEGATIVE_INFINITY); // false
console.log(isNumber(1233); // true
console.log(isNumber(1233.345); // true
console.log(isNumber(0); // true
```

## API

```typescript
isNumber(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要判断的值 | any  |

### 返回

(boolean):返回布尔值
