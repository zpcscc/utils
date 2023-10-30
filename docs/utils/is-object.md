---
group:
  title: is函数
title: isObject
---

# 介绍

检查“value”是否为“Object”。

```js
import { isObject } from '@dxsixpc/utils';

console.log(isObject({})); // true
console.log(isObject([1, 2, 3])); // false
console.log(isObject(undefined)); // false
console.log(isObject('')); // false
```

## API

```typescript
isObject(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要判断的值 | any  |

### 返回

(boolean):返回布尔值
