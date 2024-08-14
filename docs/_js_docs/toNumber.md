# toNumber-将“value”转换为有效数字

## 描述

<p>排除了 Infinity、-Infinity、NaN，这类非正常数字，全部返回 0</p>

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| data   | <code>any</code> | <p>要转换的值</p> |

## 返回

<code>number</code> - <p>返回转换后的有限数字</p>

## 示例 _(ts类型)_

```typescript
toNumber(value: any);
```

## 示例 _(demo)_

```typescript
import { toNumber } from '@zpcscc/utils';

console.log(toNumber(3.2)); // 3.2
console.log(toNumber('3.2')); // 3.2
console.log(toNumber(Number.POSITIVE_INFINITY)); // 0
console.log(toNumber(Number.MIN_VALUE)); // 0
console.log(toNumber(Number.NaN)); // 0
```
