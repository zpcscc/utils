# 检查“value”是否是“null”或“undefined”

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| value  | <code>any</code> | <p>要判断的值</p> |

## 返回

(<code>boolean</code>)：<p>返回布尔值</p>

## 示例

### ts类型

```typescript
isNil(value: any);
```

### demo

```typescript
import { isNil } from '@zpcscc/utils';

console.log(isNil()); // true
console.log(isNil(null)); // true
console.log(isNil(undefined)); // true
console.log(isNil(void 0)); // true
console.log(isNil(Number.NaN); // false
console.log(isNil('')); // false
```
