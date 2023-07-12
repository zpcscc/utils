---
group:
  title: 语言
title: isString
---

# 介绍

检查"value"是否为“string“。

```js
import { isString } from '@dxsixpc/utils';

console.log(isString('')); // true
console.log(isString('123')); // true
console.log(isString()); // false
console.log(isString(0)); // false
console.log(isString(null)); // true
```

## API

```typescript
isString(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要判断的值 | any  |

### 返回

(boolean):返回布尔值
