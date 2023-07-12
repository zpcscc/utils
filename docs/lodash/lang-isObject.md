---
group:
  title: 语言
title: isObject
---

# 介绍

检查“value”是否为“Object”的 <a href="https://262.ecma-international.org/6.0/#sec-ecmascript-language-types" target="_blank">language type</a>
(例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))

```js
import { isObject } from '@dxsixpc/utils';

console.log(isObject({})); // true
console.log(isObject([1, 2, 3])); // true
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
