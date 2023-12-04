# 检查“value”是否是“Symbol“

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| value  | <code>any</code> | <p>要判断的值</p> |

## 返回

(<code>boolean</code>)：<p>返回布尔值</p>

## 示例

### ts类型

```typescript
isSymbol(value: any);
```

### demo

```typescript
import { isSymbol } from '@zpcscc/utils';

console.log(isSymbol(Symbol.iterator)); // true
console.log(isSymbol(Symbol(1))); // true
console.log(isSymbol()); // false
console.log(isSymbol('abc')); // false
```
