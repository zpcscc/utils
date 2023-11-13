---
group:
  title: is函数
title: isSymbol
---

# 介绍

检查"value"的类型是否为“Symbol”。

```js
import { isSymbol } from '@zpcscc/utils';

console.log(isSymbol(Symbol.iterator)); // true
console.log(isSymbol(Symbol(1))); // true
console.log(isSymbol()); // false
console.log(isSymbol('abc')); // false
```

## API

```typescript
isSymbol(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要检查的值 | any  |

### 返回

(boolean):返回布尔值
