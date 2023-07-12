---
group:
  title: 语言
title: toString
---

# 介绍

转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。

```js
import { toString } from '@dxsixpc/utils';

console.log(toString(3.2)); // '3.2'
console.log(toString('3.2')); // '3.2'
console.log(toString(0)); // '0'
console.log(toString(-0)); // '-0'
console.log(toString(null)); // ''
console.log(toString(undefined)); // ''
console.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
console.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'
console.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'
console.log(toString(Number.MIN_VALUE)); // '5e-324'
```

## API

```typescript
toString(value: any);
```

### 参数

| 参数  | 说明         | 类型 |
| ----- | ------------ | ---- |
| value | 需要转换的值 | any  |

### 返回

(string):返回转换后字符串。
