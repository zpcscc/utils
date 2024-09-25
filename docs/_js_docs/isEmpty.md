# isEmpty

## 描述

<p>判断数据是否为空</p>

## 参数

| 参数名 | 类型             | 描述                  |
| ------ | ---------------- | --------------------- |
| value  | <code>any</code> | <p>需要检查的数据</p> |

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| value | <code>any</code> | <p>需要检查的数据</p> |

## 返回

<code>boolean</code> - <p>返回布尔值</p>

## 示例 _(ts类型)_

```typescript
isEmpty(value: any);
```

## 示例 _(demo)_

```typescript
import { isEmpty } from '@zpcscc/utils';

console.log(isEmpty()); // true
console.log(isEmpty('')); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(void 0)); // true
console.log(isEmpty(Number.NaN); // true
console.log(isEmpty(123); // false
console.log(isEmpty('123'); // false
console.log(isEmpty({}); // true
console.log(isEmpty([]); // true
console.log(isEmpty({a:1}); // false
console.log(isEmpty([1,2,3]); // false
console.log(isEmpty(new Map([[1,2],[3,4]])); // false
console.log(isEmpty(new Set([1,2,3])); // false
```
