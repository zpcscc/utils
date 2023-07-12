---
group:
  title: 语言
title: isNil
---

# 介绍

检查"value"是否为“null”或“undefined”。

```js
import { isNil } from '@dxsixpc/utils';

console.log(isNil()); // true
console.log(isNil(null)); // true
console.log(isNil(undefined)); // true
console.log(isNil(void 0)); // true
console.log(isNil(Number.NaN); // false
console.log(isNil('')); // false
```

## API

```typescript
isNil(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要判断的值 | any  |

### 返回

(boolean):返回布尔值
