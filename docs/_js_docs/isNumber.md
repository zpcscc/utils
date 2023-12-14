# 检查“value”是否是有效“Number“

## 描述

<p>排除 Infinity、-Infinity、MAX_VALUE、MIN_VALUE、NaN、</p>

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| value  | <code>any</code> | <p>要判断的值</p> |

## 返回

<code>boolean</code> - <p>返回布尔值</p>

## 示例 _(ts类型)_

```typescript
isNumber(value: any);
```

## 示例 _(demo)_

```typescript
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
